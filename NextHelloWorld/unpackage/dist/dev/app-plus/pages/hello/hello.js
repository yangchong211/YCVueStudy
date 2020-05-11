
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"green { background-color: red; }\n",],undefined,{path:"./pages/hello/hello.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/hello/hello.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      