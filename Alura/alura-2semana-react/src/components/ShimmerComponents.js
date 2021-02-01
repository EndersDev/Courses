import styled from 'styled-components'

const shimmer = styled.body``
/* const shimmer = styled.html`
  body {
    border: 2px solid #f6f7f8;
    padding: 100px;
  }

  .styledd {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 104px;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }

  box {
    height: 104px;
    width: 100px;
  }

  div {
    display: inline-flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 15px;
    vertical-align: top;
  }

  lines {
    height: 10px;
    margin-top: 10px;
    width: 200px;
  }

  photo {
    display: block !important;
    width: 325px;
    height: 100px;
    margin-top: 15px;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
` */

/* const shimmer = styled.div`
  .br {
    border-radius: 8px;
  }
  .w80 {
    width: 80%;
  }
  .card {
    border: 2px solid #fff;
    box-shadow: 0px 0px 10px 0 #a9a9a9;
    padding: 30px 40px;
    width: 80%;
    margin: 50px auto;
  }
  .wrapper {
    width: 0px;
    animation: fullView 0.5s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .profilePic {
    height: 65px;
    width: 65px;
    border-radius: 50%;
  }
  .comment {
    height: 10px;
    background: #777;
    margin-top: 20px;
  }

  @keyframes fullView {
    100% {
      width: 100%;
    }
  }

  .animate {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
` */

shimmer.Alter = styled.div`
  height: 39px;
  width: 284px;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

shimmer.Line = styled.div`
  height: 20px;
  margin-top: 10px;
  width: 120px;
  max-width: 200px;
`

shimmer.Parag = styled.div`
  width: 284px;
  height: 40px;
`

shimmer.IMG = styled.div`
  display: block !important;
  max-width: 400px;
  max-height: 400px;
  margin-top: 15px;
  width: 100%;
  height: 150px;
`

shimmer.But = styled.button`
  height: 39px;
  width: 284px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`

export default shimmer
