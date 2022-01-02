import { ref, watchEffect, watch, onUnmounted, effectScope } from "vue";
import { createSharedComposable, tryOnScopeDispose } from "@vueuse/core";

const store = ref(0);
const double = ref(0);

export default function useStore(route) {
  function addInfo(val) {
    store.value += val;
  }
  const val = document.querySelectorAll("HTML");
  console.log("val", val);
  val[0].addEventListener("click", () => console.log("clicked"));

  function myFunction() {
    alert("Hello World!");
  }

  watch(
    () => route.name,
    (prev, next) => {
      console.log("watch updated", prev, next);
    }
  );
  watchEffect(() => {
    double.value = store.value * 2;
    console.log("running watchEffect");
  });

  return {
    store: store,
    addInfo: addInfo,
    double: double
  };
}
