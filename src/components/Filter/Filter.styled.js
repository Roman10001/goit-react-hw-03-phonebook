import styled from 'styled-components';

export const LabelFilter = styled.label`
	display: block;
	margin-top: 10px;
	padding: 5px 10px;
	font-size: 15px;
	font-weight: 600;
	/* color: #fff; */
	text-transform: uppercase;

	background-image:  linear-gradient(to bottom right, red, yellow);
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`;

export const InputFilter = styled.input`
	display: block;
	width: 93%;
	margin: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 13px;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	outline: none;
	border: 0;
	border-radius: 20px;
	font-family: 'Roboto', sans-serif;
	background: rgb(245, 229, 152);
	background:  linear-gradient(to bottom right, red, yellow);

	color: black;
`;
