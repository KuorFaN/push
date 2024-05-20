(function() {
      const url = new URL(window.location.href);
      const clickID = url.searchParams.get("click_id");
      const sourceID = url.searchParams.get("source_id");

      const s = document.createElement("script");
      s.dataset.cfasync = "false";
      s.src = "https://push-sdk.com/f/sdk.js?z=1214140";
      s.onload = (opts) => {
          opts.zoneID = 1214140;
          opts.extClickID = clickID;
          opts.subID1 = sourceID;
          opts.actions.onPermissionGranted = () => { window.location.replace(); };
          opts.actions.onPermissionDenied = () => { window.location.replace(); };
          opts.actions.onAlreadySubscribed = () => { window.location.replace(); };
          opts.actions.onError = () => { window.location.replace(); };
      };
      document.head.appendChild(s);
  })()
