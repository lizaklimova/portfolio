import { ResumeItem, ResumeTitle } from "./ResumeBlock.styled";

const ResumeBlock = ({ title, children }) => {
  return (
    <ResumeItem>
      <ResumeTitle $variant={title}>{title}</ResumeTitle>
      {children}
    </ResumeItem>
  );
};

export default ResumeBlock;
