// this is my shit 💀 lemme not find it in your project 
// Thanks chatgpt 😍😍
// reach me before copy pasting it 26777821911

const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({ nomCom: "videologo", categorie: "modern-logo", reaction: "🧚" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const text = arg.join(" ");

  if (!text) {
    repondre("Please provide a search query.");
    return;
  }

  try {
    // Message content
    const messageText = `Reply with below numbers to generate *${text}* logo

1 ➠ sweet love 💕😘
2 ➠ lightning pubg
3 ➠ intro video 📷
4 ➠ tiger 🐯 video logo

*Enjoy 🥰*`;

    const contextInfo = {
      mentionedJid: [ms.sender], // Mention the sender
      externalAdReply: {
        title: "🔏𝐑𝐀𝐇𝐌𝐀𝐍𝐈 𝐌𝐃💬",
        body: "Regards, 🔏𝐑𝐀𝐇𝐌𝐀𝐍𝐈 𝐌𝐃💬",
        thumbnailUrl: "https://files.catbox.moe/aktbgo.jpg",
        sourceUrl: "https://chat.whatsapp.com/D3dnvm4vsn9HafO6wkqnzF",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    };

    const messageToSend = {
      text: messageText,
      contextInfo,
    };

    // Send the message
    const sentMessage = await zk.sendMessage(dest, messageToSend, { quoted: ms });

    // Event listener for message responses
    zk.ev.on('messages.upsert', async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) {
        return;
      }

      const responseText = message.message.extendedTextMessage.text.trim();
      if (message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        // Handle different logo choices based on number
        let logoUrl;
        switch (responseText) {
          case '1':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-sweet-love-video-cards-online-734.html", text);
            break;
          case '2':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html", text);
            break;
          case '3':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html", text);
            break;
          case '4':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", text);
            break;
          
          // Add additional cases as required
          default:
            return repondre("*_Invalid number. Please reply with a valid number._*");
        }

        // Send the logo if URL is found
        if (logoUrl) {
          await zk.sendMessage(dest, {
            video: { url: logoUrl },
            mimetype: "video/mp4",
            caption: `*Downloaded by 🔏𝐑𝐀𝐇𝐌𝐀𝐍𝐈 𝐌𝐃💬*`,
          }, { quoted: ms });
        }
      }
    });
  } catch (error) {
    console.log(error);
    repondre(`Error: ${error}`);
  }
});

// Function to fetch the logo URL using axios
const fetchLogoUrl = async (url, name) => {
  try {
    const response = await axios.get(`https://api-pink-venom.vercel.app/api/logo`, {
      params: { url, name }
    });
    return response.data.result.download_url; // Ensure this is the correct path for the download URL in the API response
  } catch (error) {
    console.error("Error fetching logo:", error);
