import { getMessages } from "@/actions/message";
import MessageTable from "@/components/admin/message/MessageTable";

export default async function MessagesPage() {

  const messages =
    await getMessages();

  return (

    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Contact Messages
      </h1>

      <MessageTable
        messages={messages}
      />

    </div>

  );
}