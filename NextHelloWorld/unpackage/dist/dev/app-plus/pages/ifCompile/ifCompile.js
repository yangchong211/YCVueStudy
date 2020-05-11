
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"color { background-color: #FF0000; width: ",[0,250],"; height: ",[0,250],"; }\n",],undefined,{path:"./pages/ifCompile/ifCompile.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/ifCompile/ifCompile.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      