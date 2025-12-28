"use client";

import { useState } from "react";
import { TextArea, Button, Card } from "@heroui/react";
import { useMailTo } from "@/lib/hooks/useMailTo";

export function EmailCard() {
  const { sendMail } = useMailTo("carlosdanieltowork@gmail.com");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    sendMail({
      subject,
      body: `${message}`,
    });
  }

  function handleReset() {
    setSubject("")
    setMessage("")
  }

  return (
    <Card>
        <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6 m-3">
            <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <TextArea
                fullWidth
                placeholder="Assunto do email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={""}
                />
            </div>

        <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <TextArea
            fullWidth
            placeholder="Sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={""}
            />
        </div>

        <div className="flex flex-row gap-2">
            <Button type="submit" className="w-full">
                Abrir e-mail para enviar
            </Button>
            <Button type="reset" className={"bg-danger"}>
                Limpar
            </Button>  
        </div>

        </form>
    </Card>
  );
}
