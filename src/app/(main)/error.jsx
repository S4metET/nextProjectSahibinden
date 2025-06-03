  "use client";

  export default function Error({ error }) {
    return (
      <div>Bir Hata oluştu: {error === "string" ? error : "Bilinmeyen Hata"}</div>
    );
  }
