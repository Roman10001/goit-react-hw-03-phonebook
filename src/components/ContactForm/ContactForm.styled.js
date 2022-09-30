import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ErrorText = styled.p`
	color: orange;
	text-transform: lowercase;
	font-size: 15px;
`;

export const FormContacts = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Label = styled.label`
	display: block;
	margin-top: 10px;
	padding: 5px 10px;
	font-size: 15px;
	font-weight: 600;
	color: #fff;
	text-transform: uppercase;

	background-image:  linear-gradient(to bottom right, red, yellow);

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`;

export const Input = styled(Field)`
	display: block;
	width: 93%;
	margin: auto;
	padding: 13px;
	margin-top: 20px;

	box-shadow:  linear-gradient(to bottom right, red, yellow);

	outline: none;
	border: 0;

	border-radius: 20px;

	font-family: 'Roboto', sans-serif;

	background:  linear-gradient(to bottom right, red, yellow);
	background: linear-gradient(to bottom right, red, yellow);

	color: black;

	:-webkit-autofill {
		transition: all 5000s ease-in-out 0s;
	}
`;

export const BtnBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 120px;
	height: 40px;
	padding: 5px;

	font-size: 14px;
	font-weight: 700;

	opacity: 1;
	background: #ebf3fa3f;
	background-image:  linear-gradient(to bottom right, red, yellow);
	background-image:  linear-gradient(to bottom right, red, yellow);
	border: 2px solid  orange;

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;

	cursor: pointer;
	transition: transform 250ms linear;

	:hover {
		transform: scale(1.1);
	}
`;
