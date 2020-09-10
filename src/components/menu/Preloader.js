import React from 'react';
import styled from 'styled-components';

const Showbox = styled.div`
	padding: 25px;
	width: 100%;
`;

const Loader = styled.div`
	position: relative;
  margin: 0 auto;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Circular = styled.svg`
	animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
	margin: auto;
	
	@keyframes rotate {
		100 % {
			transform: rotate(360 deg);
		}
	}
`;

const Path = styled.circle`
	stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
	stroke-linecap: round;
	
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124px;
		}
	}

	@keyframes color {
		100%,
		0% {
			stroke: #d62d20;
		}
		40% {
			stroke: #0057e7;
		}
		66% {
			stroke: #008744;
		}
		80%,
		90% {
			stroke: #ffa700;
		}
	}
`;

export function Preloader() {
	return (
		<Showbox >
			<Loader>
				<Circular viewBox="25 25 50 50">
					<Path
						cx='50'
						cy="50"
						r="20"
						fill="none"
						strokeWidth="2"
						strokeMiterlimit="10"
					/>
				</Circular>
				Loading...
			</Loader>
		</Showbox>
	)
}