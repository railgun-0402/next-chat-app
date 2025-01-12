import { NextResponse } from "next/server";

// chat messageを格納
let chatMessages = [
  {
    id: 1,
    role: "bot",
    message: "こんにちは！",
  },
];

export async function GET() {
  return NextResponse.json(chatMessages);
}

// POSTリクエストを処理する関数
export async function POST(request) {
  // request bodyからデータ取得
  const data = request.json();

  // 新しいメッセージオブジェクトを作る
  const newMessage = {
    id: chatMessages.length + 1, // 既存のメッセージ数に1を加えてidを設定
    role: data.role || "user", // リクエストから受け取ったroleまたはデフォルト値"user"
    message: data.message, // リクエストから受け取ったmessage
  };
  chatMessages.push(newMessage);

  // ユーザと同じメッセージをbotメッセージとしてchatMessages配列に追加
  chatMessages.push({
    id: chatMessages.length + 1,
    role: "bot",
    message: data.message,
  });

  // 新しいメッセージを含む更新された配列をレスポンス
  return NextResponse.json(newMessage);
}
