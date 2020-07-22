import Toast from "./Toast";
let obj = {};
obj.install = function(Vue) {
  //create constructor
  const toastConstructor = Vue.extend(Toast);
  //create object to render template
  const toast = new toastConstructor();
  //append toast to document
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};
export default obj;
