import Button from "./Button.tsx";

export default function Page() {
  function handleClick() {
    console.log("Button clicked!");
  }

  const buttonTitle = <p>Click On Me</p>;

  return (
    <main>
      <Button
        style={{
          color: "green",
          backgroundColor: "pink",
          padding: "5px 20px 40px 60px",
        }}
        borderRadius={{
          topLeft: 5,
          topRight: 10,
          bottomRight: 15,
          bottomLeft: 20,
        }}
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </main>
  );
}
