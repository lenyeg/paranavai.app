export default defineNuxtPlugin((_nuxtApp) => {
  useHead({
    script: [{
      id: 'polichat-widget',
      body: true,
      async: true,
      defer: true,
      children: '(function(p,o,l,i,c,h,a,t){ p[\'PolichatObject\'] = c;p[c]=p[c]||function(){ (p[c].q=p[c].q||[]).push(arguments);},h=o.createElement(l);p[c].t=p[c].t||new Date(); a=o.getElementsByTagName(l)[0];h.async=1;h.src=i;a.parentNode.insertBefore(h,a); })(window,document,\'script\',\'https://ms.poli.digital/tags/public/services/serv.js\',\'poli\'); poli(\'create\', 47237); poli(\'send\',\'webchat\', {uid: \'53808@polichat.webchat\'});'
    }]
  })
})
