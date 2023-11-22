<template>
    <h1 class = "text-white text-3xl text-center font-bold py-10">MUSEE SPATIAL LYONNAIS</h1>
  <div id="app" class = "flex justify-center w-screen">
    <div id="unity-container" class="unity-desktop" ref="unityContainer">
      <canvas id="unity-canvas" width="960" height="600" ref="unityCanvas"></canvas>
      <div id="unity-loading-bar" ref="unityLoadingBar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full" ref="unityProgressBarFull"></div>
        </div>
      </div>
      <div id="unity-warning" ref="unityWarningBanner"></div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button" ref="unityFullscreenButton"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'UnityWebGLPlayer',
  setup() {
    const unityContainer = ref(null);
    const unityCanvas = ref(null);
    const unityLoadingBar = ref(null);
    const unityProgressBarFull = ref(null);
    const unityFullscreenButton = ref(null);
    const unityWarningBanner = ref(null);

    function unityShowBanner(msg, type) {
      function updateBannerVisibility() {
        unityWarningBanner.value.style.display = unityWarningBanner.value.children.length ? 'block' : 'none';
      }

      const div = document.createElement('div');
      div.innerHTML = msg;
      unityWarningBanner.value.appendChild(div);
      if (type == 'error') div.style = 'background: red; padding: 10px;';
      else {
        if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
        setTimeout(function() {
          unityWarningBanner.value.removeChild(div);
          updateBannerVisibility();
        }, 5000);
      }
      updateBannerVisibility();
    }

    const buildUrl = "/Build";
    const loaderUrl = buildUrl + "/jeu.loader.js";
    const config = {
      dataUrl: buildUrl + "/jeu.data.gz",
      frameworkUrl: buildUrl + "/jeu.framework.js.gz",
      codeUrl: buildUrl + "/jeu.wasm.gz",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "MUSEE",
      productVersion: "0.1",
      showBanner: unityShowBanner,
    };

    onMounted(() => {
      const container = unityContainer.value;
      const canvas = unityCanvas.value;
      const loadingBar = unityLoadingBar.value;
      const progressBarFull = unityProgressBarFull.value;
      const fullscreenButton = unityFullscreenButton.value;
      const warningBanner = unityWarningBanner.value;

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
        container.className = "unity-mobile";

        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        unityShowBanner('WebGL builds are not supported on mobile devices.');
      } else {
        canvas.style.width = "960px";
        canvas.style.height = "600px";
      }
      
      loadingBar.style.display = "block";

      const script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);
    });

    return {
      unityContainer,
      unityCanvas,
      unityLoadingBar,
      unityProgressBarFull,
      unityFullscreenButton,
      unityWarningBanner
    };
  }
};
</script>

<style scoped>
/* Votre style CSS ici */
</style>
