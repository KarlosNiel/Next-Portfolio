export function useMailTo(to: string) {
  function sendMail({
    subject,
    body,
  }: {
    subject: string;
    body: string;
  }) {
    const link = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = link;
  }

  return { sendMail };
}
