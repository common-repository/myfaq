function tinymce_faq_btn() {
    return "[myfaq_answer]<br/><br/>[/myfaq_answer]";
}
 
(function() {
    tinymce.create('tinymce.plugins.tinymce_faq_btn', {
         init : function(ed, url){
            ed.addButton('tinymce_faq_btn', {
            title : 'Insert FAQ Answer',
                onclick : function() {
                    ed.execCommand(
                    'mceInsertContent',
                    false,
                    tinymce_faq_btn()
                    );
                },
                image: url + "/faqs-h3.gif"
            });
        }
    });
 
    tinymce.PluginManager.add('tinymce_faq_btn', tinymce.plugins.tinymce_faq_btn);
 
})();
