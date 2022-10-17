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

			fn.mobile();
			
		},

		//lnb
		lnb : function(){
			$(document).on("click", "#lnb .depth1", function(){
				var tg = $(this).attr('data-target');
				$(this).closest("#lnb").addClass("on").attr("data-open",tg);
				$('.cont-head .drop-tg').removeClass("open").find(".info").removeClass("on");
				$(".board-wrap").hide();
				$(".my-menu button, .btm-option .menu").removeClass("on");
				if($(this).closest("li").hasClass("active")){
					$(this).closest("li").removeClass("active");
					$("#lnb").removeAttr("data-open");
				}
				else{
					$(this).closest("li").addClass("active").siblings().removeClass("active");
					$("#lnb").removeAttr("data-open");
					setTimeout(() => {
						$("#lnb").attr("data-open",tg);
					}, 50);
				}
			});
			$(document).on("click", "#lnb .my-menu button", function(){
				$(".btm-option .menu").removeClass("on");
				$("#lnb nav ul > li").removeClass("active");
				$(".board-wrap").hide();
				$(".cont-head .drop-tg").removeClass("open").find(".info").removeClass("on");
				var tg = $(this).attr('data-target');
				$(this).closest("#lnb").addClass("on").attr("data-open",tg);
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$("#lnb").removeAttr("data-open");
				}else{
					$(this).addClass("on").siblings().removeClass("on");
				}
			});

			// $(document).on("click", ".btm-option .fix", function () {
			// 	if ($("#lnb").hasClass("on")) {
			// 	  $("#lnb").removeClass("on");
			// 	  $(this).removeClass("on");
			// 	  $("#lnb").removeAttr("data-open");
			// 	} else {
			// 	  $("#lnb").addClass("on");
			// 	  $(this).addClass("on");
			// 	}
			// });
				
			//220922이서현 수정
			$('#lnb .lnb-wrap').click(function(e) {  
				if(!$(e.target).hasClass("side")) {
					if (!$(".btm-option .fix").hasClass("on")) { //고정이 아닐때 						
						if ($("#lnb").hasClass("on")) {
								$("#lnb").removeClass("on");
								$(this).removeClass("on");
								$("#lnb").removeAttr("data-open");
						} else {
							$("#lnb").addClass("on");
							$(this).addClass("on");
						}					
					}else{ //고정 일때	
					}
				}else{
				}
			});  

			$('.btm-option .fix').click(function() { 	
				$(this).toggleClass("on");			
			});	

			$(document).on("click", ".btm-option .menu", function(){
				$(".my-menu button").removeClass("on");
				$("#lnb nav ul > li").removeClass("active");
				$(".board-wrap").hide();
				$(".cont-head .drop-tg").removeClass("open").find(".info").removeClass("on");
				var tg = $(this).attr('data-target');
				$("#lnb").addClass("on").attr("data-open",tg);
				if($(this).hasClass("on")){
					$(this).removeClass("on");
					$("#lnb").removeAttr("data-open");
				}else{
					$(this).addClass("on").siblings(".menu").removeClass("on");
				}
			});

			$(document).on("dblclick",".btn-menu-handle", function(){
				$("#lnb").removeAttr("data-open");
				$("#lnb .depth1").closest("li").removeClass("active");
				$("#lnb .my-menu button").removeClass("on");
				$(".btm-option .menu").removeClass("on");
			});
			
		},

		//conthead
		conthead : function(){
			$(document).on("click", ".cont-head .btn-fold", function(){
				$(this).closest(".info").toggleClass("on").closest(".drop-tg").siblings().removeClass("open").find(".info").removeClass("on");
				$("#lnb").removeAttr("data-open");
				$("#lnb nav > ul > li").removeClass("active");
				$(".my-menu button, .btm-option .menu").removeClass("on");
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
					$("#lnb").removeAttr("data-open");
					$("#lnb nav > ul > li").removeClass("active");
					$(".btm-option .menu, .my-menu button").removeClass("on");
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
				} else if ($(this).parents('.nav-menu, .folder-tree').length == 1) {
					$(this).closest("li").toggleClass("open");
				} else {
					$(this).closest("li").addClass("open").siblings().removeClass("open");
				} 
			});
			$(document).on("click", ".toggle button", function(){
				if(!$(this).hasClass(".btn-toggle")){
					$(".toggle > li").removeClass("active");
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

			// $(document).on("click", ".folder-tree .toggle", function(){
			// 	if($(this).closest("li").hasClass("open")){
			// 		$(this).closest("li").removeClass("open");
			// 	}else{
			// 		$(this).closest("li").addClass("open");
			// 	}
			// });

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


			$( function() {
				var tabs = $(".report-control").tabs();
				var previouslyFocused = false;

				$(".poplayer, .kpi-page").find(tabs).find(".ui-tabs-nav").sortable({
					axis: "x",
					scroll: false,
					start: function(event, ui) {
						previouslyFocused = document.activeElement === ui.item[ 0 ];
					},
					stop: function(event, ui) {
						tabs.tabs("refresh");
					if (previouslyFocused) {
						ui.item.trigger("focus");
					}
				}
				});
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
		fileupload : function(obj){
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
			var s = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'],
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
			$(document).on("click", ".nav-menu .toggle li", function(){
				if($(this).children().length == 1) {
					$(this).closest(".toggle").find("li").removeClass("on");
					$(this).addClass("on");
				}
			});
			/*220919 이서현 추가*/
			$(document).on("click", ".nav-menu.sep-menu .toggle li a", function(){
				$(".nav-menu.sep-menu .toggle li").removeClass("on");
				$(this).closest("li").addClass("on");
			});
			
			$(document).on("click", ".team-tree-items .team a", function(){
				if($(this).closest('li').hasClass('last')) {
					return 0;
				} else {
					$(this).closest("li").toggleClass('open');
				}
			});
			
			//report page
			function repoViewSize() {

				if($('.main-tabs-wrap').css('display') == 'block'){
					var menuTabHeight = $('.main-tabs-wrap').outerHeight();
				} else {
					var menuTabHeight = 0;
				}
				if($('.report-page .repo-tabs').css('display') == 'block'){
					var repoTabHeight = $('.report-page .repo-tabs').outerHeight();
				} else {
					var repoTabHeight = 0;
				}
				var pageMg = parseInt($('.report-page').css('margin-top'));
				var winHeight = $(window).height();
				var tooltipHeight = $('.report-wrap .top').outerHeight();//툴팁
				var headerHeight = $('.cont-head').outerHeight(); //헤더
				var repoView = winHeight - (menuTabHeight + repoTabHeight) - tooltipHeight - headerHeight - pageMg - 9; //차이
				$('.report-page .cont').height(repoView);
			}
			repoViewSize();
			$(window).resize(function(){
				repoViewSize();
			});
			
			//lnb 닫기 공통
			// $(document).on("click", ".cont-body", function(){
			// 	$("#lnb").removeAttr("data-open");
			// 	$(".board-wrap").hide();
			// 	$("#lnb nav > ul > li").removeClass("active");
			// 	$(".my-menu button, .btm-option .menu").removeClass("on");
			// 	$('.cont-head .drop-tg').removeClass("open").find(".info").removeClass("on");
			// 	if(!$(".btm-option .fix").hasClass("on")) {
			// 		setTimeout(() => {
			// 			$("#lnb").removeClass("on");
			// 		}, 100);
			// 	}
			// });
			$(window).scroll(function(){
				var offTop = $(document).scrollTop();
				if(offTop == 0 ){
					$("#wrap").addClass("top");
				} else {
					$("#wrap").removeClass("top");
				}
			});

			//툴팁 공통 220916 이서현
			// $(".report-wrap .tool .bread button").on({
			// 	mouseenter: function () {
			// 		$(this).closest(".bread").addClass("on");
			// 	},
			// 	mouseleave: function () {
			// 		$(this).closest(".bread").removeClass("on");
			// 	}
			// });
			$(".tool .tip > button").on({
				mouseenter: function () {
					$(this).closest(".tip").addClass("on");
				},
				mouseleave: function () {
					$(this).closest(".tip").removeClass("on");
				}
			});
		
			
			$(document).on("click", ".cont-body", function(){
				$("#lnb").removeAttr("data-open");
				$(".board-wrap").hide();
				$("#lnb nav > ul > li").removeClass("active");
				$(".my-menu button, .btm-option .menu").removeClass("on");
				$('.cont-head .drop-tg').removeClass("open").find(".info").removeClass("on");
			});

			//대시보드 옵션
			$(document).on("click", ".kpi-options .btns button", function(){
				$(this).closest('.opt').siblings('.opt').find('> button').removeClass('on');
				$(this).toggleClass('on');
				$('.dashboard-menu').hide();
				if($(this).hasClass('stop')){
					$(this).removeClass('stop on');
				}
			});

			//대시보드 탭 그룹 변경
			$(document).on("dblclick", "li.kpi-options a", function(){
				if($(this).hasClass('on')){
					$(this).removeClass('on');
				} else {
					$(this).closest('.ui-tabs-nav').find('.kpi-options a').removeClass('on');
					$(this).addClass('on');
				}
			});
			
			$(document).on("click", ".kpi-options .pops.play .btn", function(){
				$(this).closest('.play').siblings('button').addClass('stop');
			});
			$(document).on("click", ".kpi-options .btns .drag-menu", function(){
				if ($(this).hasClass('on')) {
					$('.dashboard-menu').show();
				} else {
					$('.dashboard-menu').hide();
				}
			});

			//대시보드 드래그드랍 이벤트

			$(".chart-wrap .chart-box.empty").on({
				drag: function(e) {
					e.preventDefault();
					$('.dashboard-menu').addClass('hide');
				},
				dragover: function (e) {
					e.preventDefault();
					$(this).addClass('drag');
				},
				dragleave: function (e) {
					e.preventDefault();
					$(this).removeClass('drag');
				},
				drop: function(e) {
					e.preventDefault();
					$(this).removeClass('empty').addClass('show',function(){
						$(this).off();
					});
					$('.dashboard-menu').removeClass('hide');
					//$(this).append('<div class="head"><div class="left"><span class="ico">M</span><p class="title">영업현황</p></div><div class="right"><span class="date">2020.01</span><button type="button" class="del">삭제</button></div></div><div class="chart-view"><div class="board" id="chart4"></div><a href="#" class="link">상세보고서 바로가기</a></div>');
				}
			});

			$(".dashboard-menu .chart-type li").on({
				drag: function(e) {
					e.preventDefault();
					// $(this).closest('.dashboard-menu').addClass('hide');
				},
				dragend: function(e) {
					e.preventDefault();
					$(this).closest('.dashboard-menu').removeClass('hide');
				}
			});


			$(".chart-add .chart-type select").change(function(){
				var selIdx = $(this).find('option').index('.chart-add .chart-type select option:selected');
				console.log(selIdx);
				$('.chart-add .thumb img:eq('+selIdx+')').show().siblings().hide();
			});

		},
		accodion : function(){
			$(document).on("click",".folder-tree.sep-sortable .root, .folder-tree a, .folder-tree button.btn-toggle", function(){
				// $(".folder-tree a, .folder-tree button").removeClass("view");
				// 220915 이서현 수정
				if(!$(this).hasClass("btn-toggle")){
				$(this).closest(".folder-tree").parent().find(".folder-tree.sep-sortable .root, .folder-tree a, .folder-tree button.btn-toggle").removeClass("view");
				$(this).addClass("view");
				};
			});
			$(document).on("click",".accordion .head", function(){
				var cont = $(this).closest('li');
				if(cont.hasClass('on')){
					cont.removeClass('on').find('.cont').slideUp('fast');
				} else {
					cont.addClass('on').find('.cont').slideDown('fast');
					$(this).closest('li').siblings().removeClass('on').find('.cont').slideUp('fast');
				}
			});
		},

		progress : function(){
			let t = 0
			let barWidth = 0
			
			const barAnimation = setInterval(() => {
				barWidth =  t + '%'
				$(".progress-bar .progress").width(barWidth);
				t++ >= 100 && clearInterval(barAnimation)
			}, 10)
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
		ovHidden : function(){
			$("body").addClass("ov-hidden");	
		},

		//모바일
		mobile : function(){
			$(document).on("click",".m-head .depth-menu, .menu-sec .menu-close", function(){
				$('.menu-sec').toggleClass('on');
				$('.dimm').toggleClass('on');
				$("body").toggleClass("ov-hidden");
			});
			$(document).on("click",".dimm", function(){
				$('.menu-sec').removeClass('on');
				$('.dimm').removeClass('on');
				$("body").removeClass("ov-hidden");
			});
		},
		
		mobileHeight : function(){
			function fnSize(){
				var winHeight = $(window).height();
				var boxHeight = winHeight - 162;
				$('.chart-list .chart-box').height(boxHeight / 3);
				$('.mobile .cont-body').height(winHeight);
			}
			fnSize();
			$( window ).resize(function() { fnSize(); });
		}
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
	});
	// }).datepicker('setDate',new Date());

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
	/* month picker 221014이서현 추가*/
	var today = getTodayType();
	var options = {
		pattern: 'yyyy.mm',
		//selectedYear: 2021,       // 선택할 연도
		//startYear: 2010,         // 시작연도
		//finalYear: 2022,          // 마지막연도
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		//openOnFocus: true,       // focus시에 달력이 보일지 유무
		//disableMonths : [ ]     // 월 비활성화
	};
	$(".monthpicker input").monthpicker(options);
	//초기값
	function getTodayType(){
		var date = new Date();
		return date.getFullYear() + "." + ("0"+(date.getMonth()+1)).slice(-2);
	}
	$('.monthpicker input').val(today);
	
	//달력버튼
	$('.monthpicker input').on('click', function(){
		$(this).focus();
		$(this).monthpicker();
	});
/*
	//datepicker 월만 선택
	$('.monthpicker input').datepicker({
		dateFormat: 'yy.mm', //날짜 포맷이다.
		//prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
		//nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		//currentText: '오늘', // 오늘 텍스트 변경
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		onClose: function(monthNames, inst) { 
			var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
			var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
			$(this).val($.datepicker.formatDate('yy.mm', new Date(year, month, 1)));
		}
	});
	// 20221007 이서현 수정
	$(".monthpicker input").focus(function () {
		$(".ui-datepicker-calendar").hide();
		if($(this).parents().hasClass("poplayer")){
			$(".ui-widget.ui-widget-content").addClass("month-gray");
		}else{
			$(".ui-widget.ui-widget-content").removeClass("month-gray");
		};	
		
	});
*/
	//LNB 메뉴 리사이즈 핸들링
	function ResizerMo(element) {
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
	$('#lnb .nav-menu, #lnb .search-box').each(function(idx, element){
        new ResizerMo(element);
    });


});

// 220915이서현 추가	
//항목 위치 위로이동
$(document).on("click",".folder-tree .btn-up",function(){	
	console.log("위로이동");	
	var test = $(this).parent().parent().prev();	
	test.before($(this).parent().parent());
});
//항목 위치 아래로이동
$(document).on("click",".folder-tree .btn-dw",function(){	
	console.log("아래로이동");	
	var test = $(this).parent().parent().next();	
	test.after($(this).parent().parent());
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
$(window).on("load", function(){
	//init
	fn.common();
});
// 220920이서현 추가	
$(document).ready(function(){
	// 보고서 메뉴 매핑 disabled
	$(".folder-tree.sep-sortable.system a.check-disalbed").find("input").attr('disabled',true);	

	//폴더명 title
	$(".folder-tree.sep-sortable.system a").find("span").attr("title", "폴더명");	

	// 보고서 메뉴 매핑 전체선택/해제
	// $(".folder-tree.sep-sortable.system a.folder input").click(function() {
	// 	if($(this).is(":checked")) $(this).closest(".folder").siblings("ul").find("input").prop("checked", true);
	// 	else $(this).closest(".folder").siblings("ul").find("input").prop("checked", false);
	// });
	// $(".folder-tree.sep-sortable.system .sort-item a input").click(function() {
	// 	var total = $(this).closest("ul").find("input").length;
	// 	var checked = $(this).closest("ul").find("input:checked").length;

	// 	if(total != checked)  $(this).closest("ul").siblings(".folder").find("input").prop("checked", false);
	// 	else $(this).closest("ul").siblings(".folder").find("input").prop("checked", true); 
	// });
});
