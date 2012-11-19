YUI.add('postReviewWidgetTest', function(Y) {
		
		//create the test suite
		var suite = new Y.Test.Suite("PostReviewWidgetTest");

		//add test cases
		var testCase = new Y.Test.Case({

			name: "PostReviewWidgetTest",
			"PostReviewWidgetTest with same data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var postNode = Y.Node.create('<div id="container"></div>');
				// instantiate PostReviewWidget with the HTML
				var postReviewWidget = new Y.Phresco.PostReviewWidget({
					// place holder can be decided by specifying the attribute
					targetNode : postNode,
					apiReference : eshopapi
			   });
				var userId = 1;
				eshopapi.set("userId", userId);
				var jsonData ={"id" : 1};
				
				postReviewWidget.createContent(postNode, jsonData);
				var output1 = postReviewWidget.getTargetNode().get('innerHTML');
				
				 var targetNode = phrescoWidget.createElement('<div></div>');
				 
				 var writeareviewDiv = phrescoWidget.createElement('<div class="tab_text" id="writeareview">');
						var reviewForm = phrescoWidget.createElement('<form id="contact" method="post" action="form.html">');
						var reviewFieldset = phrescoWidget.createElement('<fieldset>');

						var reviewRating = phrescoWidget.createElement('<div></div>');
						var reviewRatingTitle = phrescoWidget.createElement('<label for="name"><span class="comments_text">Rate this</span></label>');
						var ratingStarSpan = phrescoWidget.createElement('<span class="ratingStarSpan"></span>');
						
						var i;
						
						for (i = 1; i <= 5; i++) {
							var starImage = 'start_dis.png';
							var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
							star.obj = phrescoWidget;
							star.data = i;
							Y.on('click' , phrescoWidget.addRating , star);
							ratingStarSpan.appendChild(star);
						}
						var starValueBox = phrescoWidget.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
						var productId = phrescoWidget.createElement('<input type="hidden" name="productId" id="productId" value="'+jsonData.id+'">');
						reviewRating.appendChild(reviewRatingTitle);
						reviewRating.appendChild(ratingStarSpan);
						reviewRating.appendChild(productId);
						reviewRating.appendChild(starValueBox);
						
						var reviewComment = phrescoWidget.createElement('<label for="comments"><span class="comments_text">Comments</span></label>');
						var reviewCommentBox = phrescoWidget.createElement('<textarea  autofocus="autofocus" name="comments" id="comments" placeholder="Your comments" cols="60" rows="7" scale="no" class="com_commentbox"</textarea>');
						reviewComment.appendChild(reviewCommentBox);
						
						reviewFieldset.appendChild(reviewRating);
						reviewFieldset.appendChild(reviewComment);
						
						var reviewSubmit = phrescoWidget.createElement('<div class="postreviewbutton">');
						var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
						reviewSubmitButton.obj = phrescoWidget;
						reviewSubmitButton.data = jsonData.id;
						Y.on('click' , phrescoWidget.reviewSubmitFn , reviewSubmitButton);
						
							
						var reviewCancelButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle"/>');
						reviewCancelButton.obj = phrescoWidget;
						reviewCancelButton.data = jsonData.id;
						Y.on('click' , phrescoWidget.loginPop , reviewCancelButton);
						
						reviewSubmit.appendChild(reviewSubmitButton);
						reviewSubmit.appendChild(reviewCancelButton);
						reviewFieldset.appendChild(reviewSubmit);
						
						reviewForm.appendChild(reviewFieldset);

					writeareviewDiv.appendChild(reviewForm);
					
				targetNode.appendChild(writeareviewDiv);
					
				var output2 = targetNode.get('innerHTML');
			
				Y.Assert.areEqual(output1, output2, "PostReviewWidget Success case");
			},
			
			"PostReviewWidgetTest with different data": function () {
				var eshopapi = new Y.Phresco.EShopAPI({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var phrescoWidget = new Y.Phresco.PhrescoWidget({"context":"eshop", "host":"172.16.17.180" ,"port":"2020", "protocol":"http"});
				var postNode = Y.Node.create('<div id="container"></div>');
				// instantiate PostReviewWidget with the HTML
				var postReviewWidget = new Y.Phresco.PostReviewWidget({
					// place holder can be decided by specifying the attribute
					targetNode : postNode,
					apiReference : eshopapi
			   });
				var userId = 1;
				eshopapi.set("userId", userId);
				var jsonData ={"id" : 1};
				postReviewWidget.createContent(postNode, jsonData);
				var output1 = postReviewWidget.getTargetNode().get('innerHTML');
				
				 var targetNode = phrescoWidget.createElement('<div></div>');
				 
				 var writeareviewDiv = phrescoWidget.createElement('<div class="tab_text" id="writeareview">');
						var reviewForm = phrescoWidget.createElement('<form id="contact" method="post" action="form.html">');
						var reviewFieldset = phrescoWidget.createElement('<fieldset>');

						var reviewRating = phrescoWidget.createElement('<div></div>');
						var reviewRatingTitle = phrescoWidget.createElement('<label for="name"><span class="comments_text">Rate this</span></label>');
						var ratingStarSpan = phrescoWidget.createElement('<span class="ratingStarSpan"></span>');
						
						var i;
						
						for (i = 1; i <= 5; i++) {
							var starImage = 'start_dis.png';
							var star = Y.Node.create('<a href="javascript:void(0);" id="starImage_'+i+'" name="starImage_'+i+'"><img src="images/eshop/start_dis.png" width="16" height="16" title="' + i + '"></a>');
							star.obj = phrescoWidget;
							star.data = i;
							Y.on('click' , phrescoWidget.addRating , star);
							ratingStarSpan.appendChild(star);
						}
						var starValueBox = phrescoWidget.createElement('<input type="hidden" name="starValue" id="starValue" size="2">');
						var productId = phrescoWidget.createElement('<input type="hidden" name="productId" id="productId" value="'+jsonData.id+'">');
						reviewRating.appendChild(reviewRatingTitle);
						reviewRating.appendChild(ratingStarSpan);
						reviewRating.appendChild(productId);
						reviewRating.appendChild(starValueBox);
						
						var reviewComment = phrescoWidget.createElement('<label for="comments"><span class="comments_text">Comments</span></label>');
						var reviewCommentBox = phrescoWidget.createElement('<textarea  autofocus="autofocus" name="comments" id="comments" placeholder="Your comments" cols="60" rows="7" scale="no" class="com_commentbox"</textarea>');
						reviewComment.appendChild(reviewCommentBox);
						
						reviewFieldset.appendChild(reviewRating);
						reviewFieldset.appendChild(reviewComment);
						
						var reviewSubmit = phrescoWidget.createElement('<div class="postreviewbutton">');
						var reviewSubmitButton = Y.Node.create('<input type="button" value="Submit" class="buttonstyle"/>');
						reviewSubmitButton.obj = phrescoWidget;
						reviewSubmitButton.data = jsonData.id;
						Y.on('click' , phrescoWidget.reviewSubmitFn , reviewSubmitButton);
						
							
						var reviewCancelButton = Y.Node.create('<input type="button" value="Cancel" class="buttonstyle1"/>');
						reviewCancelButton.obj = phrescoWidget;
						reviewCancelButton.data = jsonData.id;
						Y.on('click' , phrescoWidget.loginPop , reviewCancelButton);
						
						reviewSubmit.appendChild(reviewSubmitButton);
						reviewSubmit.appendChild(reviewCancelButton);
						reviewFieldset.appendChild(reviewSubmit);
						
						reviewForm.appendChild(reviewFieldset);

					writeareviewDiv.appendChild(reviewForm);
					
				targetNode.appendChild(writeareviewDiv);
					
				var output2 = targetNode.get('innerHTML');	
			
				Y.Assert.areNotEqual(output1, output2, "PostReviewWidget Failure case");
			}
			
		});
		
		suite.add(testCase);
		Y.Test.Runner.add(suite);
	});