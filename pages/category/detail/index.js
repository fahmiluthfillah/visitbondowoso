import Image from "next/image";
import Container from "../../components/container";
import HeadTitle from "../../components/headTitle";
import TitleBar from "../../components/titleBar";

export default function DetailCategory() {
  return (
    <div className="h-auto">
      <TitleBar titleBar="Menu" />
      <div className="pt-5">
        <Container>List Menu by Category</Container>
      </div>
    </div>
  );
}
