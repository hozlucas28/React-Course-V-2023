/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como incorporar 'styled-components'.
 * 		   Además, de como utilizar lógica en los mismos.
 *
 *
 * IMPORTANTE:
 *  			  - Es importante que la lógica que se le aplique en los
 * 					estilos se mantenga concisa, es decir, no dependa de
 * 					terceros para evitar que se le inyecte código malicioso.
-------------------------------------------------------------------------- */

import styled, { keyframes } from 'styled-components';

const P = styled.p`
	color: red;
	font-size: 24px;
`;

const Content = styled.div`
	padding: 20px 25px;
`;

const Button = styled.button`
	transition: box-shadow 0.2s ease;
	padding: 10px 15px;
	color: ${(props) => (props.primary ? 'white' : 'red')};
	border: solid 2px red;
	border-radius: solid 2px red;
	background-color: ${(props) => (props.primary ? 'red' : 'white')};

	&:hover {
		box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
	}

	&.secondary {
		color: white;
		border: solid 2px blue;
		background-color: blue;
	}

	.info {
		font-size: 28px;
	}
`;

const BlockButton = styled(Button)`
	width: 100%;
	font-size: 24px;
`;

const Link = ({ children, className, ...props }) => {
	return (
		<a
			className={className}
			{...props}
		>
			{children}
		</a>
	);
};

const StyledLink = styled(Link)`
	color: Blue;
`;

const Input = styled.input.attrs((props) => ({
	type: 'text',
	color: props.color || 'red'
}))`
	color: ${(props) => props.color};
	font-size: 20px;
	border: 1px solid red;
`;

const Password = styled(Input).attrs({
	type: 'password'
})``;

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}

	to {
		transform: rotate(360deg)
	}
`;

const Rotation = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
`;

function App() {
	return (
		<Content>
			<P>¡Hola Mundo!</P>
			<br />

			<Button>
				Enviar <p className="info">Info</p>
			</Button>
			<br />

			<Button
				primary
				className="secondary"
			>
				Enviar
			</Button>
			<br />

			<BlockButton>Enviar</BlockButton>
			<br />

			<BlockButton
				primary
				as="a"
				href="#"
			>
				Enviar
			</BlockButton>
			<br />

			<Link>Link</Link>
			<br />

			<StyledLink>Link con estilo</StyledLink>
			<br />

			<Input />
			<br />

			<Input color="blue" />
			<br />

			<Password />
			<br />

			<Password color="blue" />
			<br />

			<Rotation>Girando</Rotation>
		</Content>
	);
}

export default App;
