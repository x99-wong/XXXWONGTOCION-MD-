
const { ezra } = require('../Rahmani/Md');

ezra({
  nomCom: "happi",
  categorie: "Rahmani-funs",
  reaction: "😂"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI HAPPY WE GO...* 🤦" });
    const animations =  ['😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
ezra({
  nomCom: "heart",
  aliases: ["moyo", "hrt"],
  categorie: "Rahmani-fun",
  reaction: "🫀"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI HEART WE GO...* 🤦" });
    const animations =  ['💖', '💗', '💕', '❤️', '💛', '💚', '🫀', '💙', '💜', '🖤', '♥️', '🤍', '🤎', '💗', '💞', '💓', '💘', '💝', '♥️', '💟', '🫀', '❤️'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
ezra({
  nomCom: "angry",
  categorie: "Rahmani-fun",
  reaction: "🥺"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI ANGRY HERE WE GO...* 🤦" });
    const animations =   ['😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
ezra({
  nomCom: "sad",
  aliases: ["heartbroken", "hrtbroken"],
  categorie: "Rahmani-fun",
  reaction: "😒"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI SAD WE GO...* 🤦" });
    const animations =  ['🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
ezra({
  nomCom: "shy",
  aliases: ["shyoff", "shyy"],
  categorie: "Rahmani-fun",
  reaction: "🥂"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI SHY WE GO...* 🤦" });
    const animations =  ['😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
ezra({
  nomCom: "moon",
  aliases: ["mon", "mwezi"],
  categorie: "Criss-fun",
  reaction: "🌚"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI MOON WE GO...* 🤦" });
    const animations =   ['🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', "🌚🌝"];
    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});

ezra({
  nomCom: "nikal",
  categorie: "Rahmani-fun",
  reaction: "⁉️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI NIKAL WE GO...* 🤦" });
    const animations = ["   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏          ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Lavde   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|     ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸   Pehli   ⡇\n ⣟⣿⡭     ⢱       ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  (P)       ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Fursat  ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄   __        ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸          ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲    ⣿  ⣸  Meeee   ⡇\n ⣟⣿⡭     ⢱         ⣿  ⢹           ⡇\n  ⠙⢿⣯⠄  |__|      ⡿  ⡇        ⡼\n   ⠹⣶⠆     ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸      `", "   ⣠⣶⡾⠏⠉⠙⠳⢦⡀   ⢠⠞⠉⠙⠲⡀ \n  ⣴⠿⠏           ⢳⡀ ⡏         ⢷\n⢠⣟⣋⡀⢀⣀⣀⡀ ⣀⡀   ⣧ ⢸           ⡇\n⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲   ⣿  ⣸   Nikal   ⡇\n ⣟⣿⡭     ⢱        ⣿  ⢹            ⡇\n  ⠙⢿⣯⠄  lodu     ⡿  ⡇       ⡼\n   ⠹⣶⠆       ⡴⠃    ⠘⠤⣄⣠⠞ \n    ⢸⣷⡦⢤⡤⢤⣞⣁          \n ⢀⣤⣴⣿⣏⠁  ⠸⣏⢯⣷⣖⣦⡀      \n⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿      \n⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏    ⣄⢸ "];

    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});

ezra({
  nomCom: "hand",
  categorie: "Rahmani-fun",
  reaction: "👊"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;
  
  try {
    const sentMessage = await zk.sendMessage(dest, { text: "🫣 *RAHMANI HAND WE GO...* 🤦" });
    const animations = [
      '8✊️===D', '8=✊️==D', '8==✊️=D', '8===✊️D', '8==✊️=D', '8=✊️==D', 
      '8✊️===D', '8=✊️==D', '8==✊️=D', '8===✊️D', '8==✊️=D', '8=✊️==D', 
      '8✊️===D', '8=✊️==D', '8==✊️=D', '8===✊️D', '8==✊️=D', '8=✊️==D', 
      '8✊️===D', '8=✊️==D', '8==✊️=D', '8===✊️D 💦', '8==✊️=D💦 💦', '8=✊️==D 💦💦 💦'
    ];

    for (const animation of animations) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await zk.relayMessage(dest, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14, // Protocol message type for edited message
          editedMessage: {
            conversation: animation
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    repondre("❌ *Error!* " + error.message);
  }
});
