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
          opts.actions.onPermissionGranted = () => { window.location.replace("https://play.google.com/store/apps/details?id=com.cramayocio.asteamgiftcard"); };
          opts.actions.onPermissionDenied = () => { window.location.replace("https://go.maziorock.com/campaign/ac79cd32-5356-4899-aa06-57256e7ab58e"); };
          opts.actions.onAlreadySubscribed = () => { window.location.replace("https://go.maziorock.com/campaign/ac79cd32-5356-4899-aa06-57256e7ab58e"); };
          opts.actions.onError = () => { window.location.replace("https://go.maziorock.com/campaign/ac79cd32-5356-4899-aa06-57256e7ab58e"); };
      };
      document.head.appendChild(s);
  })()
