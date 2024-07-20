export default function CourseInfo({ descriptionEvent }) {
  const formattedText = descriptionEvent.split("\n").map((line, index) => {
    if (line.trim() === "") {
      return <br key={index} />;
    }

    if (line.startsWith("🔹")) {
      return (
        <div key={index} style={{ marginTop: "1.5em" }}>
          <strong>{line}</strong>
        </div>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: descriptionEvent }}></div>;
  });

  return <div>{formattedText}</div>;
}
