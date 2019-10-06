import styled from 'styled-components';

const Container = styled.div`
  background: #404040;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;
`;

const Number = styled.p`
  font-size: 64px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 36px;
`;

const Copy = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`;

const CopyWrapper = styled.div`
  margin-bottom: 24px;
`;

const SegmentWrapper = styled.div`
  border-top: 1px dashed white;
  padding: 24px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  Copy,
  CopyWrapper,
  Layout,
  Number,
  NumberWrapper,
  SegmentWrapper,
};
