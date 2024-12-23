# Css lecture contents:

1. Three methods of applying css

2. Type of selectors
		id, class, tags

3. Usage of span

4. basic css properties

.para1{
	/*color:red;*/
	/*color: #FF0000;*/
	/*color: rgb(255,0,0);*/
	/*color: rgba(255,0,0, 0.6);*/

	/*text-align: right; */
			/*right, center, left*/

	/*text-decoration: none;*/
			/*underline, line-through, overline, none*/

	/*text-indent: 50px;*/
			/*it provides indentation from left side to paragraphs*/

	/*text-transform: capitalize;*/
			/*uppercase, lowercase, capitalize*/

	/*line-height: 40px;*/

	/*letter-spacing: 10px;*/

	/*word-spacing: 10px;*/


	/*font-size: 15px;*/
	
	/*font-weight: bold;*/
	
	/*font-family: 'Xanh Mono', monospace;*/

	/*font-style: italic;*/

}

4. .para a{}
5. child elements gets the properties of parent i.e if you apply some property in body it also get applied to paragraph

6. align div in center
	height
	width
	min-height		
 
 7. css borders
 	.para1{
		/*border: 1px solid black;*/
	}

8. margin, padding
.para1{
	border: 1px solid black;
	padding: 10px;
	margin-top: 50px;
}

Lecture End

9. block and inline elements
p{
	display: none;
		/*block, inline, none*/
		/*display inline also makes navbar list*/
}

10. overflow
div{
	background-color: red;
	height: 200px;
	overflow-y: scroll;
}

11. float
.div1{
	background-color: red;
	height: 200px;
	width: 25%;
	float: left;
}



12. box-shadom
.div1{
	background-color: red;
	height: 200px;
	width: 25%;
	margin: 10px auto;
	box-shadow: 1px 1px 1px 1px black;
		/*x-axis, y-axis, blur, spread, color*/
}

12. text shadow
.p1 {
    font-size: 30px;
    text-shadow: 2px 2px 3px red;
    	/*x-axis, y-axis, blur, color*/
}

13. background image
.div1{
	height: 500px;
	background-image: url('image1.jpg');
	background-repeat: no-repeat;
		 /*no-repeat, repeat-x, repeat-y*/
	/*background-position: center;*/
		/*center, left center, right center, center top*/
	background-size: cover;
		/*cover, contain, 400px 500px */
	background-attachment: fixed;
}


14. position
# ---------------------Html--------------------------
	<p class="para1">This is a <span class="span1">paragraph</span>. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. </p>
	<div class="div1">
		
	</div>
# ---------------------Css example 1--------------------------
.span1{
	background-color: red;
	position: absolute;
		/*static, relative, absolute, fixed*/
	top: 50px;
}

.div1{
	background-color: blue;
	min-height: 2000px;
}

# -------------------css example 2 -------------------------
.div1{
	background-color: red;
	height: 400px;
	width: 400px;
	margin-top: 500px;
	position: relative;
}

.div2{
	background-color: yellow;
	height: 200px;
	width: 200px;
	position: absolute;
	top: 100px;
	left: 100px;
}


15. transition
.div1{
	background-color: red;
	height: 200px;
	width: 200px;
	margin: 10px auto; 
	transition: 0.3s;
}

.div1:hover{
	height: 205px;
	width: 205px;
	transition: 0.3s;
}

16. Media Queries
.div{
	background-color: black;
	height: 200px;
}
/*@media (min-width:900px) and (max-width:1100px) {
    .div {
        background-color: red
    }
}​*/

@media (max-width:900px) {
    .div {
        background-color: red
    }
}​

17. Transformation
.div{
	height: 400px;
	width: 400px;
	margin: 30px auto;
	background-color: red;
	transition: 0.3s;
}

.div:hover{
	transform: translate(50%, -100px);
		/*x-axis, y-axis*/
	/*transform: scale(1.5,1.5);*/
	transform: rotate(20deg);
	transition: 0.3s;
}