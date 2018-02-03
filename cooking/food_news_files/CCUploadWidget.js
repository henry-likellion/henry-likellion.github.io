function CCUploadWidget(options) {
    var partitionId = options.partitionId;

    var ChannelId = options.channelId ? options.channelId : 0;
    var ContestId = options.contestId ? options.contestId : 0;

    var WidgetsDomain = options.WidgetsDomain == undefined ? '' : options.WidgetsDomain;

    var modalFrame;
    var modalData = '';

    var originalParentBodyPositioning = '';
    var originalParentBodyOverflowStyle = '';
    var originalParentBodyWidth = '100%';

    var mainWidgetIFrame; // holds the main widget iframe

    if (WidgetsDomain == '') { // just in case
        WidgetsDomain = 'widgets.celljournalist.com';
    }

    var ijs = document.getElementById('cc-upload-widget-js');

    var createMainWidgetIFrame = function () {
        mainWidgetIFrame = document.createElement('iframe');

        mainWidgetIFrame.id = 'cc-upload-widget-frame';
        mainWidgetIFrame.setAttribute('allowTransparency', true);

        iframeSrc = '//' + WidgetsDomain + '/Widgets/CCUploadWidget.aspx?PartitionId=' + partitionId;

        if (typeof ChannelId == 'undefined' || ChannelId == '') {
            ChannelId = 0;
        }

        iframeSrc += '&ChannelId=' + ChannelId;

        if (typeof ContestId == 'undefined' || ContestId == '') {
            ContestId = 0;
        }

        iframeSrc += '&ContestId=' + ContestId;

        mainWidgetIFrame.src = iframeSrc;

        mainWidgetIFrame.setAttribute('style', 'border:none; width:88px; height:35px;');
        mainWidgetIFrame.setAttribute('scrolling', 'no');
        mainWidgetIFrame.setAttribute('name', 'cc-upload-widget-frame');

        var existingCCUploadWidgetFrame = document.getElementById('cc-upload-widget-frame');
        if (existingCCUploadWidgetFrame == null) {
            ijs.parentNode.insertBefore(mainWidgetIFrame, ijs);
        } else {
            ijs.parentNode.replaceChild(mainWidgetIFrame, existingCCUploadWidgetFrame);
        }
    }

    var CreateModalFrame = function (data) {
        modalFrame = document.createElement('iframe');

        modalFrame.id = 'cc-modal-frame';
        iframeSrc = '//' + WidgetsDomain + '/Widgets/CCModal.aspx';

        modalFrame.src = iframeSrc;

        modalFrame.setAttribute('style', 'border:none; position:fixed; top:0; left:0; z-index:9999999999999999999; width:100%; height:100%; background:transparent;');
        //modalFrame.setAttribute('scrolling', 'no');

        modalFrame.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                alert('Esc key pressed.');
            }
        };
        document.body.appendChild(modalFrame);


        // instead of doing a post message to the ModalFrame, we just save the data here
        // reason is due to the frame may not be ready to listen to postMessage event, the ModalFrame
        // will notify us when it's ready
        modalData = data;

        LockParentBodyScrolling();
    }

    var handleMessage = function (event) {
        if (event.data.handler != undefined) {
            switch (event.data.handler) {
                case 'handleIFrameUpdate':
                    if (event.data.newIframeHeight != undefined) {
                        handleIFrameUpdate(event.data.newIframeHeight);
                    }
                    break;

                case 'CreateModalFrame':
                    if (event.data.data != undefined) {
                        CreateModalFrame(event.data.data);
                    }

                    break;

                case 'CloseModalFrame':
                    if (modalFrame != undefined) document.body.removeChild(modalFrame);
                    modalData = '';

                    UnlockParentBodyScrolling();
                    break;

                case 'CCModalFrameReady':
                    // ok ModalFrame is ready, tell it to turn on the modal
                    var message = { handler: 'PopulateModal', data: modalData };
                    modalFrame.contentWindow.window.postMessage(message, '*');
                    break;
            }
        }
    }

    var LockParentBodyScrolling = function () {
        originalParentBodyOverflowStyle = document.body.style.overflow;
        originalParentBodyPositioning = document.body.style.position;
        originalParentBodyWidth = document.body.style.width;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }

    var UnlockParentBodyScrolling = function () {
        document.body.style.overflow = originalParentBodyOverflowStyle;
        document.body.style.position = originalParentBodyPositioning;
        document.body.style.width = originalParentBodyWidth;
    }

    var handleIFrameUpdate = function (newIframeHeight) {
        mainWidgetIFrame.style.height = newIframeHeight + 'px';
    }


    // Hooking up iFrame post message handler
    if (window.addEventListener) {
        window.addEventListener('message', handleMessage, false);
    } else {
        window.attach('onmessage', handleMessage);
    }

    createMainWidgetIFrame();
}