/**
* --------------------------------
* Common JS
* creator : chowoobin
* from : enders
* --------------------------------
*/
var fn = (function() {
	"use strict";

	return {
		//공통
		common : function(){
			fn.lnb();
			fn.conthead();

			//toggle - 형제 depth 접히는 이벤트
			fn.toggle();

			//toggleunfold - 형제 depth 안접히는 이벤트
			fn.toggleunfold();

			//tab
			fn.tab();

			//tableinfobox
			fn.tableinfobox();

			//fileupload
			fn.fileupload();

			// editpassword
			fn.editPassword();

			// show password
			fn.showPassword();

			//swiper
			fn.swipers();

			//ui
			fn.ui();

			fn.accodion();
			
		},

		//lnb
		lnb : function(){
			$(document).on("click", "#lnb .depth1", function(){
				var tg = $(this).attr('data-target');
				$(this).closest("#lnb").addClass("on").attr("data-open",tg);
				//$(".drop-tg").removeClass("open").find(".info").removeClass("on");
				//$(".my-menu button").removeClass("on");
				//$('.board-wrap').hide();
				//$(".nav-menu.depth").show();
				// if($(".search-box").css("display") == "block") {
				// 	$(".search-box").animate(
				// 		{left:0},100,function(){
				// 			$(".search-box").hide().removeAttr('style');
				// 		}
				// 	);
				// }
				if($(this).closest("li").hasClass("active")){
					$(this).closest("li").removeClass("active");
					$("#lnb").removeAttr("data-open");
				}else{
					$(this).closest("li").addClass("active").siblings().removeClass("active");
				}
			});
			$(document).on("click", "#lnb .my-menu button", function(){
				var tg = $(this).attr('data-target');
				$(this).closest("#lnb").addClass("on").attr("data-open",tg);
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$("#lnb").removeAttr("data-open");
				}else{
					$(this).addClass("on").siblings().removeClass("on");
				}
			});
			// $(document).on("click", ".my-menu .folder", function(){
			// 	$(".nav-menu").hide();
			// 	$(".nav-menu.folder").show();
			// 	$(".search-box").animate(
			// 		{left:0},100,function(){
			// 			$(".search-box").hide().removeAttr('style');
			// 		}
			// 	);
			// });
			// $(document).on("click", ".my-menu .search", function(){
			// 	$(".nav-menu").hide();
			// 	$(".search-box").show();
			// });
			$(document).on("click", ".btm-option .fix", function(){
				$("#lnb").addClass("on");
				$(this).addClass("on");
			});
			// $(document).on("click", ".btn-menu-close", function(){
			// 	$(".btm-option .cont, .btm-option .set").removeClass("on");
			// 	$(this).closest(".menu-list").animate(
			// 		{left:0},100,function(){
			// 			$(this).closest(".menu-list").hide().removeAttr('style');
			// 		}
			// 	);
			// 	$("#lnb .my-menu button").removeClass("on");
			// });
			$(document).on("click", ".btm-option .menu", function(){
				var tg = $(this).attr('data-target');
				$("#lnb").addClass("on").attr("data-open",tg);
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$("#lnb").removeAttr("data-open");
				}else{
					$(this).addClass("on").siblings(".menu").removeClass("on");
				}
			});
			
		},

		//conthead
		conthead : function(){
			$(document).on("click", ".cont-head .btn-fold", function(){
				$(this).closest(".info").toggleClass("on").closest(".drop-tg").siblings().removeClass("open").find(".info").removeClass("on");
				$(".menu-list").animate(
					{left:0},100,function(){
						$(".menu-list").hide().removeAttr('style');
					}
				);
				if($(this).closest(".drop-tg").hasClass("open")){
					$(this).closest(".drop-tg").removeClass("open");
					$(this).text("열기");
				}else{
					$(this).closest(".drop-tg").addClass("open");
					$(this).text("닫기");
				}
				if($(".btn-board").closest(".drop-tg").hasClass("open")){
					$(".board-wrap").show();
				} else {
					$(".board-wrap").hide();
				}
			});

			//cont-head util service
			$(document).on("click", ".cont-head .util .btn-util.item01", function(){
				if($(".cont-head .util .service").hasClass("open")){
					$(".cont-head .util .service").removeClass("open");
				}else{
					$(".cont-head .util .service").addClass("open");
				}
			});
		},

		//toggle
		toggle : function(){
			$(document).on("click", ".toggle .btn-toggle", function(){
				if($(this).closest("li").hasClass("open")){
					$(this).closest("li").removeClass("open");
				}else if ($(this).parents('.nav-menu').length == 1) {
					$(this).closest("li").toggleClass("open");
				} else {
					$(this).closest("li").addClass("open").siblings().removeClass("open");
				} 
			});
			$(document).on("click", ".toggle button", function(){
				if(!$(this).hasClass(".btn-toggle")){
					$(".toggle li").removeClass("active");
					$(this).closest("li").addClass("active");
				}
			});
		},

		//toggleunfold
		toggleunfold : function(){
			$(document).on("click", ".toggle-unfold .btn-toggle", function(){
				if($(this).closest("ul").parent("li").hasClass("open")){
					$(this).closest("ul").parent("li").removeClass("open");
				}else{
					$(this).closest("ul").parent("li").addClass("open");
				}
			});
			$(document).on("click", ".toggle-unfold button", function(){
				if(!$(this).hasClass(".btn-toggle")){
					$(".toggle-unfold li").removeClass("active");
					$(this).closest(".col-box").parent("li").addClass("active");
				}
			});
		},

		//tab
		tab : function(){
			//$(".tab-menu > a:first").addClass("active");
			//$(".tab-cont > div:first").addClass("active");
			$(document).on("click", ".tab-menu a", function() {
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(".tab-cont > div").eq(index).addClass("active").siblings().removeClass("active");
			});
		},

		//tableinfobox
		tableinfobox : function(){
			$(document).on("click", ".tableinfobox .grid .btn-meta", function() {
				console.log("aa");
				$(this).closest(".grid").find(".btn-meta").removeClass("active");
				$(this).addClass("active");
			});
		},

		//html등록팝업, 파일등록팝업 내 fileupload
		fileupload : function(){
			var fileTarget = $(".fileupload input[type='file']"),
				filevalue,
				filename; // 파일명

			fileTarget.on("change", function(obj){ // 값이 변경되면
				filevalue = $(this).val().split("\\");
				filename = filevalue[filevalue.length-1]; // 파일명
				var error = $(obj).closest(".fileupload").siblings(".list-star");

				$(this).siblings(".upload-name").val(filename);

				// 파일 형식 체크
				if(filename.substring(filename.lastIndexOf(".")+1,filename.length).search("html") == -1){
					if(error.hasClass("hide")){
						error.removeClass("hide");
					}
				}else {
					error.addClass("hide");

				}
				
			});
		},

		//html등록팝업, 파일등록팝업 내 fileReset
		fileReset : function(obj){
			var $fileupload = $(obj).closest(".poplayer").find(".fileupload");

			$fileupload.find("button.btn").addClass("hide");
			$fileupload.find("label.btn").removeClass("hide");
			$fileupload.find("input[type='file']").val("");
			$fileupload.find("input[type='text']").val("");
			$fileupload.find(".filesize").text("");
			$fileupload.siblings(".list-star").addClass("hide");
		},
		
		//html등록팝업, 파일등록팝업 내 fileCheck
		fileCheck : function(obj){
			var filevalue = $(obj).val().split("\\"),
				filedir = filevalue[filevalue.length-1], // 파일명
				error = $(obj).closest(".fileupload").siblings(".list-star"),
				filesize = $(obj).siblings(".filesize");

			// 파일 형식 체크
			if(filedir.substring(filedir.lastIndexOf(".")+1,filedir.length).search("html") == -1){
				if(error.hasClass("hide")){
					error.removeClass("hide");
				}
			}else {
				error.addClass("hide");
			}

			// 용량 체크
			if($(obj).val() != ""){
				var fileSize = obj.files[0].size;
				$(obj).closest(".inputfile").siblings("button.btn").removeClass("hide");
				$(obj).closest(".inputfile").siblings("label.btn").addClass("hide");
			}
			var s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
				e = Math.floor(Math.log(fileSize) / Math.log(1024));
			filesize.text((fileSize / Math.pow(1024, e)).toFixed(2) + " " + s[e]);
			return (fileSize / Math.pow(1024, e)).toFixed(2) + " " + s[e];
		},

		//editPassword
		editPassword : function(){
			$(document).on("click", ".editpw > .title-area > button", function(){
				if($(this).closest(".title-area").parent("div").hasClass("active")){
					$(this).closest(".title-area").siblings("div").slideUp();
					$(this).closest(".title-area").parent("div").removeClass("active");

				}else{
					$(this).closest(".title-area").siblings("div").slideDown();
					$(this).closest(".title-area").parent("div").addClass("active");
				}
			});
		},

		//showPassword
		showPassword : function(){
			$(document).on("click",".editpw .btn-pwshow", function(){
				if($(this).hasClass("active")){
					$(this).removeClass("active");
					$(this).prev("input").attr("type","password");
				}else{
					$(this).addClass("active");
					$(this).prev("input").attr("type","text");
				}
			
			});
		},

		swipers : function(){
			var swiper = new Swiper(".main-tabs-swiper", {
				observeParents :true,
				observer : true,
				slidesPerView: 5,
				navigation: {
					nextEl: ".main-tabs-wrap .swiper-button-next",
					prevEl: ".main-tabs-wrap .swiper-button-prev",
				},
				allowTouchMove: false,
			});

			$(document).on("click",".main-tabs-swiper li", function(){
				$('.main-tabs-swiper li').removeClass("on");
				$(this).closest("li").addClass("on");
			
			});
		},
		ui : function(){
			$('.main-visual .toggle-wrap :checkbox').change(function(){
				if ($(this).is(':checked')) {
					$('.main-visual').removeClass('ban-off');
					$('.doc-list-wrap').removeClass('ban-off');
				} else {
					$('.main-visual').addClass('ban-off');
					$('.doc-list-wrap').addClass('ban-off');
				}
			});
			$(document).on("click",".report-wrap .tool .bread button",function(){
				$(this).closest(".bread").addClass("on");
			});
			$(window).scroll(function(){
				var offTop = $(document).scrollTop();
				if(offTop == 0 ){
					$("#wrap").addClass("top");
				} else {
					$("#wrap").removeClass("top");
				}
			});
			$(document).on("click",".report-wrap .tool .btn-close", function(){
				$(this).closest(".bread").removeClass("on");

			});
		},
		accodion : function(){
			$(document).on("click",".accordion li", function(){
				if($(this).hasClass("on")) {
					$(this).removeClass("on").find(".cont").slideUp();
				} else {
					$(this).addClass("on").find(".cont").slideDown();
					$(this).siblings("li").removeClass("on").find(".cont").slideUp();
				}
			});
		},

		//popupOpen
		popupOpen : function(obj){
			$(obj).addClass("open");
			$("body").addClass("ov-hidden");
		},

		//popupClose
		popupClose : function(obj){
			$(obj).removeClass("open");
			$("body").removeClass("ov-hidden");
		},
	}
})();

$(document).ready(function(){

	//datepicker
	$('.datepicker input').datepicker({
		dateFormat: 'yy.mm.dd', //날짜 포맷이다.
		//prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
		//nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
	}).datepicker('setDate',new Date());

	//시작일.
	$('.datepickerrange.fromDate input').datepicker({
		dateFormat: 'yy.mm.dd', //날짜 포맷이다.
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션

		onClose: function( selectedDate ) {    
			// 시작일(fromDate) datepicker가 닫힐때
			// 종료일(toDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
			$(".datepickerrange.toDate input").datepicker( "option", "minDate", selectedDate );
		}  
	});

	//종료일
	$('.datepickerrange.toDate input').datepicker({
		dateFormat: 'yy.mm.dd', //날짜 포맷이다.
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션

		onClose: function( selectedDate ) {
			// 종료일(toDate) datepicker가 닫힐때
			// 시작일(fromDate)의 선택할수있는 최대 날짜(maxDate)를 선택한 종료일로 지정 
			$(".datepickerrange.fromDate input").datepicker( "option", "maxDate", selectedDate );
		}                
	});

	//LNB 메뉴 리사이즈 핸들링
	function ResizerDemo(element) {
		element = $(element);
		var handler = $('<div class="resizer-handler"></div>');
		var info = $('<div class="resizer-info"></div>');
	
		element.append(handler);
		element.append(info);
	
		var hammer = new Hammer(element[0], {recognizers: [
			[Hammer.Pan, { threshold: 0}]
		]});
	
		var startWidth;
		element.on('mousedown', function(e){
			e.preventDefault();
		});
		hammer.on('panstart', function(e) {
			startWidth = element[0].clientWidth;
		});
	
		hammer.on('panmove', function(e) {
			element[0].style.width = (startWidth + e.deltaX) + 'px';
			info.html(element[0].clientWidth + 'px x ' + element[0].clientHeight + 'px');
		})
	}
	$('#lnb .nav-menu').each(function(idx, element){
        new ResizerDemo(element);
    });

});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


$(window).on("load", function(){
	//init
	fn.common();
});
