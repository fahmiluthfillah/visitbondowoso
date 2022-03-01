import Container from "./container";

export default function TitleBar({ titleBar }) {
  return (
    <div className="bg-green-600 h-15 w-full">
      <Container>
        <div className="py-4">
          <p className="text-white text-lg text-center font-bold">{titleBar}</p>
        </div>
      </Container>
    </div>
  );
}
