import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	a {
		text-decoration: none;
		color: hsla(0,0%,100%,.7) !important;

		&:hover {
			text-decoration: underline !important;
		}
	}

	div [class~='ant-card-extra'] a {
		color: #909090 !important;
	}
`;