jQuery(document).ready(function($) {
	$('.g_MYFAQ_post > h3').click(function() {
		$('.g_MYFAQ_post div').slideUp();
		var _selected_faq = $(this).parent().find('div').eq(0);
		if (_selected_faq.is(':visible'))
			_selected_faq.slideUp();
		else
			_selected_faq.slideDown();
	});
	var myfaq_ask_question_btn = $('#myfaq-ask-question-btn'),
		myfaq_ask_question_form = $('#myfaq-ask-question-form'),
		myfaq_close_btn = $('.myfaq-close-btn'),
		myfaq_submit_button_id = $('#myfaq-submit-button-id'),
		myfaq_question_title = $('#myfaq-question-title'),
		myfaq_question_text = $('#myfaq-question-text'),
		myfaq_question_mobile = $('#myfaq-question-mobile'),
		myfaq_question_email = $('#myfaq-question-email'),
		myfaq_question_ajax_loader = $('#myfaq-question-ajax-loader'),
		myfaq_question_captcha = $('#myfaq-question-captcha'),
		myfaq_question_captcha_img = $('#myfaq-question-captcha-img');
	myfaq_ask_question_btn.click(function() {
		myfaq_ask_question_form.slideToggle();
	});
	myfaq_close_btn.click(function() {
		$(this).parent().hide(200);
	});
	myfaq_submit_button_id.click(function(e) {
		e.preventDefault();
		if (myfaq_question_title.val() == '') {
			for (i = 0; i < 2; i++) {
				myfaq_question_title.fadeTo('fast', 0.5).fadeTo('fast', 0);
			}
			myfaq_question_title.fadeTo('fast', 1);
			return false;
		} else if (myfaq_question_text.val() == '') {
			for (i = 0; i < 2; i++) {
				myfaq_question_text.fadeTo('fast', 0.5).fadeTo('fast', 0);
			}
			myfaq_question_text.fadeTo('fast', 1);
			return false;
		} else if (myfaq_question_captcha.val() == '') {
			for (i = 0; i < 2; i++) {
				myfaq_question_captcha.fadeTo('fast', 0.5).fadeTo('fast', 0);
			}
			myfaq_question_captcha.fadeTo('fast', 1);
			return false;
		}
		myfaq_question_ajax_loader.show();
		_data_faq = {
			'action': 'submit_faq',
			'title': myfaq_question_title.val(),
			'text': myfaq_question_text.val(),
			'captcha': myfaq_question_captcha.val()
		};
		if (myfaq_question_mobile.val() != '')
			_data_faq.mobile = myfaq_question_mobile.val();
		if (myfaq_question_email.val() != '')
			_data_faq.email = myfaq_question_email.val();
		$.ajax({
			url: myfaq_ajax_url,
			type: 'post',
			dataType: 'json',
			data: _data_faq,
			success: function(data) {
				myfaq_question_ajax_loader.hide();
				myfaq_reload_captcha();
				if (data.ok == 'yes') {
					myfaq_reset_fileds();
					alert(data.msg);
				} else {
					alert(data.msg);
				}
			}
		});
	});
	myfaq_question_captcha_img.click(function() {
		myfaq_reload_captcha();
	});

	function myfaq_reload_captcha() {
		$.ajax({
			url: myfaq_ajax_url,
			type: 'post',
			dataType: 'json',
			data: {
				action: 'reload_captcha_faq'
			},
			success: function(data) {
				if (data.ok == 'yes') {
					document.getElementById('myfaq-question-captcha-img').src = data.img_src;
				} else {
					alert(data.msg);
				}
			}
		});
	}

	function myfaq_reset_fileds() {
		myfaq_question_title.val('');
		myfaq_question_text.val('');
		myfaq_question_captcha.val('');
	}
});