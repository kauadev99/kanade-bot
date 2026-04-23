exports.ErrorBaileys401 = () => {
  response = [
    "💙 Ops! Minha conexão caiu, preciso que você escaneie o QR novamente para voltarmos a conversar.",
    "🔄 Desconectei do WhatsApp, que tal reconectar escaneando o QR code? Já estou gerando um novo.",
    "⚡ Parece que alguém me desconectou... Vamos refazer nossa conexão? Escaneie o novo QR que estou criando.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_408 = () => {
  response = [
    "⏰ Eita! Demorei demais para responder e a sessão expirou. Já estou recarregando tudo.",
    "🔄 O tempo limite foi atingido, mas calma que já estou reiniciando nossa conexão.",
    "⚡ Timeout detectado! Estou recarregando o sistema para voltarmos ao normal.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_411 = () => {
  response = [
    "🔧 Algo deu errado com minha sessão salva... Estou corrigindo isso automaticamente.",
    "⚙️ Detectei incompatibilidade na sessão, mas já estou ajustando para funcionar perfeitamente.",
    "🛠️ Parece que meus arquivos de sessão estão desatualizados. Corrigindo agora mesmo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_428 = () => {
  response = [
    "📶 Ops! Parece que sua internet deu uma oscilada. Estou tentando reconectar automaticamente.",
    "🌐 A conexão com o WhatsApp foi perdida, mas não se preocupe, já estou restabelecendo.",
    "🔄 Detectei instabilidade na rede... Reconectando para manter nossa conversa fluindo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_440 = () => {
  response = [
    "⚠️ Detectei múltiplas sessões do WhatsApp Web no meu número. Por favor, feche as outras abas.",
    "🚫 Parece que você tem outro WhatsApp Web aberto comigo. Feche para eu funcionar corretamente.",
    "📱 Muitas conexões simultâneas detectadas! Deixe apenas uma sessão ativa para eu operar.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_500 = () => {
  response = [
    "🔧 Algo não estava configurado corretamente... Já estou ajustando automaticamente.",
    "⚙️ Detectei erro interno na sessão. Iniciando processo de correção automática.",
    "🛠️ Configuração inconsistente detectada! Reinicializando para resolver o problema.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.ErrorBaileys_515 = () => {
  response = [
    "🔄 O sistema solicitou uma atualização. Reiniciando para aplicar melhorias.",
    "⬆️ Atualização necessária detectada! Já estou reiniciando com as novidades.",
    "🚀 Hora de uma atualização! Reiniciando para trazer recursos ainda melhores.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.open = () => {
  response = [
    "✅ Perfeito! Estou online e conectada com sucesso ao WhatsApp Web! Vamos conversar?.",
    "🎉 Conexão estabelecida com êxito! Estou pronta para te ajudar no que precisar.",
    "💙 Online e operacional! Sessão carregada perfeitamente, estou à sua disposição.",
    "⚡ Conexão estabilizada! Sistema carregado e pronto para atender você.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.connecting = () => {
  response = [
    "🔄 Inicializando meus sistemas... Em breve estarei pronta para conversar.",
    "⚡ Carregando todas as funcionalidades... Aguarde só um pouquinho.",
    "🚀 Preparando tudo para te oferecer a melhor experiência... Quase lá.",
    "💙 Oi! Estou acordando e configurando tudo... Logo estaremos conversando.",
    "🎯 Sincronizando dados e carregando recursos... Preparando surpresas para você.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.blackList = (GroupMetadata_, sab2) => { 
  const participant = sab2.participants[0].split("@")[0]
  const response = [
    `💙 *ᴀᴏ ɴᴏᴛᴀʀ... ᴠᴏᴄᴇ̂ ᴇᴜ ᴘᴇɢᴏᴜ ɴᴀ ʟɪꜱᴛᴀ ᴅᴏ ᴘᴏʀᴄᴏ ᴇ ᴘᴀʀᴀ ᴄᴀꜱᴀ ᴇᴜ ᴛᴇ ᴇʟɪᴍɪɴᴇɪ 💀*`,
    `💙 *ᴇᴜ ᴛᴀᴠᴀ ᴄᴏᴍ ᴏ ᴄᴀʟᴍᴏ, ᴍᴀs ᴄᴀᴅᴇ̂ ᴀ ᴘᴀᴢ? ɴᴀ̃ᴏ ᴀᴄᴏɴᴛᴇᴄᴇ ᴀᴄᴀʙᴏᴜ ᴘᴀʀᴀ ᴠᴏᴄᴇ̂ 😎*`,
    `💙 *ᴏ ᴍᴀᴋɪ ɴᴀ̃ᴏ ᴇꜱᴛᴀ ᴍᴜᴅᴀʀᴅᴏ ᴍᴀɪs... ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ ɴᴀᴏ ᴇᴠɪᴛᴀʀ 💢*`,
    `💙 *ᴏ ᴄᴀᴜꜱᴀ ᴇʀᴀ ᴏ ᴅᴇ ᴛᴇᴍᴘᴏ, ᴀ ʟɪꜱᴛᴀ ᴛᴇ ᴇʟɪᴍɪɴᴏᴜ... ᴘᴀʀᴀ ᴀ ᴘᴇᴀᴢ ɴᴀ̃ᴏ ᴇxɪꜱᴛᴇ 💥*`,
    `💙 *ᴏ ᴜʟᴛɪᴍᴏ ᴀᴠɪꜱᴏ ᴄʜᴇɢᴏᴜ, ᴀ ᴘᴇɴᴀ ᴇ ʀᴇᴀʟ ᴘᴀʀᴀ ᴠᴏᴄᴇ̂ ☠️🌀*`
  ]
  return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesLeft = (getName, numeroParticipante, encodeURIComponent) => {
  response = [
    "Se foi mais um membro, que volte algum dia no futuro.",
    "Alguem decidiu partir, desejo boa sorte na jornada e felicidades.",
    "Que pena, Perdemos um membro da família. sentirei saudades!",
    `${encodeURIComponent(getName(numeroParticipante))} saiu do grupo, sentiremos muito sua falta! volte logo.`,
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.phrasesWelcome = (mdata_2, getName, numeroParticipante, encodeURIComponent) => {
  response = [
    `Bem-vindo(a) ao ${encodeURIComponent(mdata_2.subject)}! Divirta-se conosco.`,
    `${encodeURIComponent(getName(numeroParticipante))} chegou de paraquedas no grupo! Seja bem-vindo(a).`,
    "Leia as regras e aproveite nossa comunidade incrível.",
    "Mais uma pessoa especial se juntou à nossa família.",
    "Aceita um cafezinho enquanto conhece o pessoal?",
    "Olá! Sou a 𝐅𝐔𝐑𝐈𝐍𝐀, sua assistente virtual favorita neste grupo.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.wait = () => {
  const response = [
    "👑 ᴇᴍ ᴀʟɢᴜɴꜱ sᴇɢᴜɴᴅᴏs ᴇꜱᴛᴀʀᴀ́ ᴘʀᴏɴᴛᴏ...",
    "💙 ᴛʀᴀʙᴀʟʜᴀɴᴅᴏ ɴᴀ sᴜᴀ sᴏʟɪᴄɪᴛᴀᴄ̧ᴀ̃ᴏ...",
    "🕊️ ᴜᴍ ɪɴsᴛᴀɴᴛᴇ, ᴇsᴛᴏᴜ ᴘʀᴏᴄᴇssᴀɴᴅᴏ...",
    "⏳ ᴄᴀʟᴍᴀ ᴀɪ́, ǫᴜᴀꜱᴇ ᴛᴇʀᴍɪɴᴀɴᴅᴏ...",
    "✨ ᴘʀᴇᴘᴀʀᴀɴᴅᴏ ᴛᴏᴅᴏ ᴇꜱᴘᴇᴄɪᴀʟᴍᴇɴᴛᴇ ᴘᴀʀᴀ ᴠᴏᴄᴇ̂...",
    "💫 ǫᴜᴀꜱᴇ ʟᴀ́, sᴏ ᴍᴀɪꜱ ᴜᴍ ɪɴsᴛᴀɴᴛᴇ...",
    "🛠️ ᴀᴊᴜꜱᴛᴀɴᴅᴏ ᴛᴏᴅᴏ ᴄᴏᴍ ᴄᴜɪᴅᴀᴅᴏ...",
    "💌 ᴘʀᴏᴄᴇssᴀɴᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ ᴄᴏᴍ ᴄᴀʀɪɴʜᴏ...",
    "🌟 sᴇɢᴜʀᴇ ᴀɪ́, ᴛᴀ́ ǫᴜᴀꜱᴇ ᴘʀᴏɴᴛᴏ...",
    "🔮 ᴄᴏɴꜱᴜʟᴛᴀɴᴅᴏ ᴏs ᴀsᴛʀᴏs... ᴘʀᴏɴᴛᴏ ᴊᴀ́ ᴊᴀ́!",
    "🧩 ᴍᴏɴᴛᴀɴᴅᴏ ᴀꜱ ᴘᴇçᴀs ᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ...",
    "⚡ ʀᴀᴘɪᴅɪɴʜᴏ, sᴏ ᴀɢᴜᴀʀᴅᴀɴᴅᴏ ғɪɴᴀʟɪᴢᴀʀ...",
    "🎯 ǫᴜᴀꜱᴇ ᴀᴄᴇʀᴛᴀɴᴅᴏ ᴇᴍ ᴄʜᴇɪᴏ!",
    "💎 ᴛʀᴀʙᴀʟʜᴀɴᴅᴏ ᴄᴏᴍ ᴛᴏᴅᴀ ᴅᴇᴅɪᴄᴀᴄ̧ᴀ̃ᴏ..."
  ];
  return response[Math.floor(Math.random() * response.length)];
};
exports.onlyAdmins = () => {
  const response = [
    "🔒 ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ́ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴀᴅᴍɪɴs! ᴠᴏᴄᴇ̂ ᴀɪ́ ᴀᴛᴀ́ ɴᴀ̃ᴏ ᴘᴏᴅᴇ ᴜsᴀʀ...",
    "👑 ᴀᴘᴇɴᴀꜱ ᴍᴇᴍʙʀᴏs ᴄᴏᴍ ᴘᴏᴅᴇʀᴇꜱ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴛɪᴠᴏs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴇꜱᴛᴀ ꜰᴜɴᴄ̧ᴀ̃ᴏ.",
    "⚠️ ᴀᴄᴇꜱꜱᴏ ɴᴇɢᴀᴅᴏ! ᴘᴀʀᴀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴀᴘᴇɴᴀꜱ ᴀᴅᴍɪɴs ᴛᴇᴍ ᴘᴇʀᴍɪꜱsᴀ̃ᴏ.",
    "🛡️ ꜰᴜɴᴄ̧ᴀ̃ᴏ ʀᴇsᴛʀɪᴛᴀ! ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇxɪɢᴇ ᴘʀɪᴠɪʟᴇ́ɢɪᴏs ᴅᴇ ᴀᴅᴍɪɴ.",
    "🚫 ᴏᴘꜱ! ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ́ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴀ ᴇǫᴜɪᴘᴇ ᴀᴅᴍɪɴɪsᴛʀᴀᴛɪᴠᴀ.",
    "💼 ᴄᴏᴍᴀɴᴅᴏ ᴇᴍᴘʀᴇsᴀʀɪᴀʟ! ᴀᴘᴇɴᴀꜱ ɢᴇʀᴇɴᴛᴇs ᴘᴏᴅᴇᴍ ᴇxᴇᴄᴜᴛᴀʀ.",
    "🎖️ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʀᴇqᴜᴇʀ ᴘᴀᴛᴇɴᴛᴇ ᴅᴇ ᴀᴅᴍɪɴ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyOwner = () => {
  const response = [
    "👨‍💻 ᴀᴘᴇɴᴀꜱ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ ᴛᴇᴍ ᴀᴜᴛᴏʀɪᴢᴀᴄ̧ᴀ̃ᴏ ᴛᴏᴛᴀʟ ᴘᴀʀᴀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ.",
    "🔐 ᴀ́ʀᴇᴀ ᴜʟᴛʀᴀ ʀᴇsᴛʀɪᴛᴀ! ᴀᴘᴇɴᴀꜱ ᴏ ᴘʀᴏᴘʀɪᴇᴛᴀ́ʀɪᴏ ᴘᴏᴅᴇ ᴀᴄᴇꜱsᴀʀ.",
    "⚡ ᴇꜱᴛᴇ ᴇ́ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ᴍᴀꜱᴛᴇʀ! ᴀᴘᴇɴᴀꜱ ᴏ ǫᴜᴇ ᴍᴇ ᴄʀɪᴏᴜ ᴘᴏᴅᴇ ᴜsᴀʀ.",
    "🛡️ ᴀᴘᴇɴᴀꜱ ᴏ ᴄʀɪᴀᴅᴏʀ ᴛᴇᴍ ᴘᴏᴅᴇʀ ꜰᴜʟʟ ɴᴏ ᴄᴏᴍᴀɴᴅᴏ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyGroup = () => {
  const response = [
    "👥 ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ғᴜɴᴄɪᴏɴᴀ ᴀᴘᴇɴᴀꜱ ᴇᴍ ɢʀᴜᴘᴏꜱ! ǫᴜᴇ ᴛᴀʟ ᴍᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴇᴍ ᴜᴍ?.",
    "🏠 ᴄᴏᴍᴀɴᴅᴏ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ɢʀᴜᴘᴏꜱ! ɴᴏ ᴘʀɪᴠᴀᴅᴏ ɴᴀ̃ᴏ ʀᴏʟᴀ.",
    "🎪 ꜰᴜɴᴄ̧ᴀ̃ᴏ ᴄᴏᴍᴜɴɪᴛᴀ́ʀɪᴀ! ғᴜɴᴄɪᴏɴᴀ ᴀᴘᴇɴᴀꜱ ᴇᴍ ɢʀᴜᴘᴏꜱ.",
    "👫 ᴘᴀʀᴀ ᴜsᴀʀ ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ, ᴘʀᴇᴄɪꜱᴏ ᴇsᴛᴀʀ ᴇᴍ ᴜᴍ ɢʀᴜᴘᴏ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyVipUser = () => {
  const response = [
    "💎 ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ́ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴜsᴜᴀ́ʀɪᴏs VIP! ᴄᴏɴᴛᴀᴛᴇ ᴏ ᴄʀɪᴀᴅᴏʀ.",
    "🌟 ꜰᴜɴᴄ̧ᴀ̃ᴏ ᴘʀᴇᴍɪᴜᴍ! ᴀᴘᴇɴᴀꜱ ᴜsᴜᴀ́ʀɪᴏs VIP ᴘᴏᴅᴇᴍ ᴜsᴀʀ.",
    "👑 ᴄᴏᴍᴀɴᴅᴏ VIP! ᴘᴀʀᴀ ᴅᴇsʙʟᴏǫᴜᴇᴀʀ, ᴄᴏɴᴛᴀᴛᴇ ᴏ ᴘʀᴏᴘʀɪᴇᴛᴀ́ʀɪᴏ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyBotAdmin = () => {
  const response = [
    "🛡️ ᴘʀᴇᴄɪsᴏ sᴇʀ ᴀᴅᴍɪɴ ᴅᴏ ɢʀᴜᴘᴏ ᴘᴀʀᴀ ᴇxᴇᴄᴜᴛᴀʀ ᴄᴏᴍᴀɴᴅᴏs!",
    "⚡ ᴘᴀʀᴀ ᴛʀᴀʙᴀʟʜᴀʀ ɴᴀ sᴇɢᴜʀᴀɴᴄ̧ᴀ ᴅᴏ ɢʀᴜᴘᴏ, ᴘʀᴇᴄɪsᴏ ᴘᴏᴅᴇʀᴇꜱ ᴅᴇ ᴀᴅᴍɪɴ!",
    "🎯 ɴᴀ̃ᴏ ᴘᴏsso ᴇxᴇᴄᴜᴛᴀʀ sᴇᴍ sᴇʀ ᴀᴅᴍɪɴ! ꜱᴏʟɪᴄɪᴛᴇ ᴍᴀ ᴘʀᴏᴍᴏᴄ̧ᴀ̃ᴏ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyGroupFun = (prefixo) => {
  const response = [
    `🎮 ᴘᴀʀᴀ ʟɪʙᴇʀᴀʀ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴅɪᴠᴇʀsᴀ̃ᴏ, ᴀᴛɪᴠᴇ ᴏ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ᴄᴏᴍ ${prefixo}modobrincadeira! (ᴀᴘᴇɴᴀꜱ ᴀᴅᴍɪɴs)`,
    `🎪 ᴏ ᴍᴏᴅᴏ ᴅɪᴠᴇʀsᴀ̃ᴏ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ! ᴘᴇᴅᴀ ᴀ ᴜᴍ ᴀᴅᴍɪɴ ᴘᴀʀᴀ ᴜsᴀʀ: *${prefixo}modobrincadeiras 1*`
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.onlyPrivate = () => {
  const response = [
    "🔒 ᴇꜱᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ғᴜɴᴄɪᴏɴᴀ ᴀᴘᴇɴᴀꜱ ᴇᴍ ᴄᴏɴᴠᴇʀsᴀs ᴘʀɪᴠᴀᴅᴀꜱ.",
    "💬 ꜰᴜɴᴄ̧ᴀ̃ᴏ ᴇxᴄʟᴜsɪᴠᴀ ᴅᴏ ᴘʀɪᴠᴀᴅᴏ! ᴄʜᴀᴍᴇ-ᴍᴇ ɴᴏ ᴅɪʀᴇᴄᴛ."
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.bannedUser = () => {
  response = [
    "🚫 Você violou meus termos de uso e está banido de usar meus comandos.",
    "⛔ Acesso bloqueado! Você está impedido de usar minhas funcionalidades.",
    "🔒 Conta suspensa! Meu criador te baniu por alguma infração grave.",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  const usuario = `@${mentionUser.split("@")[0]}`;
  const ddd = extractDDD(mentionUser.split("@")[0]);

  const response = [
    `⚠️ ${usuario}, ᴠᴏᴄᴇ̂ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴘᴏʀ ᴛᴇʀ ᴅᴅᴅ ᴘʀᴏɪʙɪᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.`,
    `🚫 ${usuario}, ɪɴғᴇʟɪᴢᴍᴇɴᴛᴇ sᴇᴜ ᴅᴅᴅ ɴᴀ̃ᴏ ᴇ́ ᴘᴇʀᴍɪᴛɪᴅᴏ ᴀǫᴜɪ.`,
    `⛔ ɴᴜ́ᴍᴇʀᴏs ᴄᴏᴍ ᴅᴅᴅ ${ddd} ɴᴀ̃ᴏ sᴀ̃ᴏ ᴀᴄᴇɪᴛᴏs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.`,
    `🛡️ sɪsᴛᴇᴍᴀ ᴅᴇ ᴘʀᴏᴛᴇᴄ̧ᴀ̃ᴏ ᴀᴛɪᴠᴏ! ᴅᴅᴅ ${ddd} ᴇsᴛᴀ́ ʙʟᴏǫᴜᴇᴀᴅᴏ.`,
  ];

exports.textInfoGrupo = (meta, groupAdmins, groupMembers, prefix, moment) => {
    return `「💙🌹」

- *🧊 | ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ:* ${meta.subject}
- *🆔 | ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ:* ${meta.id}

- *👑 | ᴄʀɪᴀᴅᴏʀ:* @${(meta.subjectOwner || '').replace('@s.whatsapp.net', '') || 'ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ'}
- *📅 | ᴄʀɪᴀᴄ̧ᴀ̃ᴏ:* ${moment(meta.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}
- *🕓 | ᴜʟᴛɪᴍᴀ ᴀʟᴛᴇʀᴀᴄ̧ᴀ̃ᴏ:* ${moment(meta.subjectTime * 1000).format('DD/MM/YYYY HH:mm:ss')}

- *👥 | ᴍᴇᴍʙʀᴏs:* ${groupMembers.length}
- *🛡️ | ᴀᴅᴍɪɴs:* ${groupAdmins.length}
- *📊 | ᴛᴏᴛᴀʟ:* ${meta.participants.length}

- *📝 | ᴅᴇsᴄʀɪᴄ̧ᴀ̃ᴏ:*
${meta.desc || 'ɴᴀ̃ᴏ ᴛᴇᴍ ᴅᴇsᴄʀɪᴄ̧ᴀ̃ᴏ'}

- *🔒 | ғᴇᴄʜᴀᴅᴏ:* ${meta.announce ? 'sɪᴍ' : 'ɴᴀ̃ᴏ'}
- *⚙️ | ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴘᴏʀ ᴍᴇᴍʙʀᴏs:* ${meta.restrict ? 'ɴᴀ̃ᴏ' : 'sɪᴍ'}

- *📌 | ᴄᴏᴍᴀɴᴅᴏs ᴜᴛɪs:*
> ${prefix}atividade
> ${prefix}inativos [quantidade]`;
};

  return response[Math.floor(Math.random() * response.length)];
};
exports.arquived = () => {
  const response = [
    "「💥」 *COMUNICADO* ↴\n> ⚡ ᴇᴜ ᴀᴠɪꜱᴇɪ…\n> 💣 ᴊᴀ́ ᴇꜱᴛᴀ́ ʀᴏᴅᴀᴅᴏ! 😎",
    "「🔥」 *ALERTA* ↴\n> 💥 ᴊᴀ́ ᴅɪᴢᴇʀᴀᴍ ᴇꜱᴛᴀʀ ᴘʀᴏɴᴛᴏ…\n> ⚡ ᴇꜱᴛᴀ́ ʀᴏᴅᴀᴅᴏ MESMO! 💨",
    "「⚡」 *ATENÇÃO* ↴\n> 💣 ᴇᴜ ᴀᴠɪꜱᴇɪ…\n> 😎 ᴏ ʀᴏᴅᴏ ᴇꜱᴛᴀ́ ᴀᴄᴏɴᴛᴇᴄᴇɴᴅᴏ!",
    "「💀」 *AVISO* ↴\n> ⚡ ᴊᴀ́ ᴇꜱᴛᴀ́ ʀᴏᴅᴀᴅᴏ!\n> 💥 ᴇᴜ ᴀᴠɪꜱᴇɪ, ɴᴀ̃ᴏ ᴅɪᴢ ᴋᴇ ᴍᴇ ᴅɪʀᴀᴍ 😏",
    "「💣」 *COMUNICADO* ↴\n> 😎 ᴊᴀ́ ᴠɪʀᴀᴅᴏ!\n> ⚡ ᴇᴜ ᴀᴠɪꜱᴇɪ ᴄᴇʀᴛᴏ!",
    "「🔥」 *ALERTA* ↴\n> 💥 ᴏ ʀᴏᴅᴏ ᴇꜱᴛᴀ́ ᴀᴄᴏɴᴛᴇᴄᴇɴᴅᴏ!\n> ⚡ ᴇᴜ ᴀᴠɪꜱᴇɪ ᴄᴇʀᴛᴏ, ᴍᴀɪs ɴᴀ̃ᴏ ᴅᴀ ᴘᴀʀᴀ ᴇꜱᴛᴀʀ 😎",
    "「💥」 *AVISO RÁPIDO* ↴\n> ⚡ ᴊᴀ́ ᴇꜱᴛᴀ́ ʀᴏᴅᴀᴅᴏ!\n> 💣 ᴇᴜ ᴅɪꜱᴘᴇɪ ᴛᴏᴅᴏ ᴍᴜɴᴅᴏ 😏",
    "「💀」 *COMUNICADO* ↴\n> 😎 ᴇᴜ ᴀᴠɪꜱᴇɪ…\n> ⚡ ᴏ ᴛʀᴜɴᴄᴏ ᴇꜱᴛᴀ́ ʀᴏᴅᴀᴅᴏ 💥",
    "「⚡」 *ATENÇÃO* ↴\n> 💣 ᴊᴀ́ ᴇꜱᴛᴀ́ ᴘʀᴏɴᴛᴏ!\n> 😏 ᴇᴜ ᴀᴠɪꜱᴇɪ ᴄᴇʀᴛᴏ!",
    "「🔥」 *ALERTA* ↴\n> ⚡ ᴏ ʀᴏᴅᴏ ᴄʜᴏᴄᴏᴜ ᴄᴇʀᴛᴏ!\n> 💥 ᴇᴜ ᴀᴠɪꜱᴇɪ 😎"
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.errorConvertSticker = () => {
  return "❌ Falha ao processar a mídia para sticker! Tente novamente com outro arquivo.";
};
exports.teste = () => {
response = [ "*ᴇᴜ ᴇsᴘᴇʀᴇɪ ᴛᴀɴᴛᴏ, ᴄʜᴏʀᴇɪ ᴛᴀɴᴛᴏ ᴏʀᴀɴᴅᴏ ᴀ ᴅᴇᴜs ᴘᴇᴅɪɴᴅᴏ ᴜᴍᴀ ᴍᴜʟʜᴇʀ ɪᴅᴇᴀʟ ᴘᴀʀᴀ ᴍɪᴍ, ᴇ ᴠᴇᴊᴀᴍ sᴏ.. ᴇsᴛᴇꜰᴀɴʏ ᴇɴᴛʀᴏᴜ ᴇᴍ ᴍɪɴʜᴀ ᴠɪᴅᴀ ᴇᴍ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴏɴᴅᴇ ᴇᴜ ᴘʀᴇᴄɪsᴀᴠᴀ, ᴇᴜ ᴀᴍᴏ ᴛᴀɴᴛᴏ ᴇʟᴀ ǫᴜᴇ ғɪᴢ ᴍᴜɪᴛᴀ ᴍᴜᴅᴀɴᴄᴀ ᴇᴍ ᴍɪᴍ ᴍᴇsᴍᴏ sᴏ ᴘʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴄᴏᴍ ᴇʟᴀ. 😼*\n\n» 👁️‍🗨️ ᴅʏʟᴀɴ ᴍᴏᴅᴢ",
   "*ᴇᴜ sᴏ ǫᴜᴇʀɪᴀ ᴀʟɢᴜᴇᴍ ᴘʀᴀ ᴀᴍᴀʀ ᴇ sᴇ sᴇɴᴛɪʀ ᴀᴍᴀᴅᴏ, ᴇ ᴅᴇᴜs ᴍᴇ ᴅᴇᴜ ᴜᴍᴀ ᴘᴇssᴏᴀ ɪɴᴄʀɪᴠᴇʟ, ᴇsᴛᴇꜰᴀɴʏ ᴏ ɴɪᴄᴋ ᴅᴇʟᴀ, ᴇʟᴀ ᴇ ᴜᴍ ᴘʀᴇsᴇɴᴛᴇ ᴅᴇ ᴅᴇᴜs ᴘʀᴀ ᴍɪᴍ. 💖🙇‍♂️*\n\n» 👁️‍🗨️ ᴅʏʟᴀɴ ᴍᴏᴅᴢ",
   "*ᴇᴜ ᴛᴇɴʜᴏ ᴍᴀɪs ᴅᴇ ᴜᴍ ᴀɴᴏ ᴅᴇ ᴄʀɪᴀᴄᴀᴏ, ᴠᴏᴄᴇ ᴀᴄʜᴀ ᴍᴇsᴍᴏ ǫᴜᴇ ᴇᴜ ᴠᴏᴜ ᴅᴇɪxᴀʀ ᴠᴏᴄᴇ ɴᴀ ᴍᴀᴏ? ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ ʀsʀs 🙇‍♂️*",
      `*ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ ᴀᴍᴀ ᴛᴀɴᴛᴏ ᴀ ᴇsᴛᴇꜰᴀɴʏ.. ᴇʟᴇ ᴅᴀʀɪᴀ ǫᴜᴀʟǫᴜᴇʀ ᴄᴏɪsᴀ ᴘʀᴀ ᴠᴇʀ ᴇʟᴀ ғᴇʟɪᴢ 🥺*`,
    '*ᴇᴍʙᴏʀᴀ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ sᴇᴊᴀ ᴀʀʀᴏɢᴀɴᴛᴇ ᴄᴏᴍ ᴍᴜɪᴛᴏs ᴇ sᴏᴍᴇɴᴛᴇ ʙᴏɴᴢɪɴʜᴏ ᴄᴏᴍ ᴀ ᴍɪɴʜᴀ sᴜʙ ᴅᴏɴᴀ ᴇsᴛᴇꜰᴀɴʏ, ɴᴏ ғᴜɴᴅᴏ ᴇʟᴇ ᴇ ᴜᴍ ᴄᴀʀᴀ ʟᴇɢᴀʟ.. ᴇɴᴠɪᴀɴᴅᴏ 🚀*',
        `*ᴘᴏᴠ: "- ᴄᴀᴅᴇ sᴇᴜ ɴᴀᴍᴏʀᴀᴅᴏ❓"*\n\n*ᴇʟᴀ: "- ᴘᴇᴅɪɴᴅᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘʀᴀ ʙᴏᴛ ᴅᴇ Wʜᴀᴛsᴀᴘᴘ 😅"*\n\n*ᴋᴋᴋᴋᴋᴋᴋᴋᴋ, ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*`,
  "*ᴇɴǫᴜᴀɴᴛᴏ ᴇᴜ ғᴀᴄᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ, ᴄᴀɴᴛᴇ ᴄᴍɢ ᴀǫᴜɪ, ᴀᴀᴀᴀʜ sᴇ ᴇʟᴀ sᴏᴜʙᴇssᴇ ǫᴜᴇ ǫᴜᴀɴᴅᴏ ᴇʟᴀ ᴘᴀssᴀ... 🎶*",
  "*ᴍᴀɴᴏᴏ ᴠᴏᴄᴇ ᴊᴀ ᴛᴏᴍᴏᴜ ᴀɢᴜᴀ ʜᴊ? ᴘғᴠʀ vᴀɪ ᴛᴏᴍᴀʀ 3 ᴄᴏᴘᴏs ᴅ'ɢᴜᴀ cᴏʀʀᴇ ᴇnǫᴜᴀɴᴛᴏ ᴇɴᴠɪᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 😳🥤*",
  "*ɴᴜɴᴄᴀ ᴊᴜʟɢᴜᴇ ᴜᴍ ʟɪᴠʀᴏ ᴘᴇʟᴀ ᴄᴀᴘᴀ, ᴠᴏᴄᴇ ɪʀᴀ sᴇ ᴀʀʀᴇᴘᴇɴᴅᴇʀ ᴅɪssᴏ. 💭*\n\n» 👁️‍🗨️ ᴅʏʟᴀɴ ᴍᴏᴅᴢ",
  "*ᴇᴜ sᴇᴍᴘʀᴇ ʙᴜsᴄᴏ ᴘᴀᴢ ᴇ ᴛʀᴀɴǫᴜɪʟɪᴅᴀᴅᴇ.. ᴍɪɴʜᴀ ᴍᴇɴᴛᴇ ɴᴀᴏ ᴘᴏᴅᴇ sᴇʀ ᴜᴍᴀ ᴅᴀs ᴍᴇʟʜᴏʀᴇs, ᴍᴀs ᴏ ᴍᴇᴜ ғᴏᴄᴏ ᴇ ᴅᴇᴛᴇʀᴍɪɴᴀᴄᴀᴏ ғᴀᴢ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ, sᴇ ᴇsғᴏʀᴄᴇ sᴇᴍᴘʀᴇ ǫᴜᴇ ᴠᴏᴄᴇ ɪʀᴀ ᴀʟᴇᴍ. 🚀*\n\n» 👁️‍🗨️ ᴅʏʟᴀɴ ᴍᴏᴅᴢ",
  "*💬 ᴏ ɢʀᴀɴᴅᴇ sᴇɢʀᴇᴅᴏ ᴘᴀʀᴀ ᴛᴇʀ ᴜᴍᴀ ᴠɪᴅᴀ ʙᴏᴀ, ᴇ ᴇɴᴄᴏɴᴛʀᴀʀ ᴏ sᴇᴜ ᴅᴇsᴛɪɴᴏ ᴇ ʀᴇᴀʟɪᴢᴀ-ʟᴏ*\n\n» 👁️‍🗨️ ᴅʏʟᴀɴ ᴍᴏᴅᴢ",
  "*ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ... ᴀʜʜ ᴏ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ, ᴇᴜ ᴀᴍᴏ ᴇʟᴇ ᴅᴍs, sᴇᴍ ᴇʟᴇ ᴇᴜ ɴᴀᴏ ᴇsᴛᴀʀɪᴀ ᴀǫᴜɪ ᴄᴏᴍ ᴠᴄs 🥺*",
"*ᴍᴇᴜs sᴇʀᴠɪᴄᴏs ᴄᴏᴍᴇᴄᴀʀᴀᴍ ɴᴏ ᴅɪᴀ 25/01/2026 📆, ᴠᴏᴄᴇ ᴀᴄʜᴀ ᴍᴇsᴍᴏ ǫᴜᴇ ɪʀᴇɪ ᴅᴇɪxᴀʀ ᴠᴏᴄᴇ ɴᴀ ᴍᴀᴏ? ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ᴀɪ ǫᴜᴇ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 🙇‍♂️*",
"*sᴀʙᴇ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ sᴇᴜ(ᴀ) ᴇx ᴇ ᴏ ʀᴇxᴏɴᴀ? ᴏ ʀᴇxᴏɴᴀ ɴᴀᴏ ᴛᴇ ᴀʙᴀɴᴅᴏɴᴀ, ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ 😹*",
"*ɢᴏsᴛᴀʀɪᴀ ᴅᴇ ᴄᴏɴᴛʀᴀᴛᴀʀ ᴍᴇᴜs sᴇʀᴠɪᴄᴏs? ᴇɴᴛʀᴇ ᴇᴍ ᴄᴏɴᴛᴀᴛᴏ ᴄᴏᴍ ᴍᴇᴜ ᴅᴏɴᴏ, ᴀɢᴏʀᴀ ᴅᴇɪxᴇ ᴇᴜ ᴇɴᴠɪᴀʀ sᴇᴜ ᴘᴇᴅɪᴅᴏ ʟᴏɢᴏ 💁‍♂️*",
"*sᴀʙᴇ ǫᴜᴀʟ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ ᴇᴜ ᴇ ᴠᴏᴄᴇ? ᴇᴜ sᴏᴜ ᴏ ᴘʀᴏᴛᴀɢᴏɴɪsᴛᴀ! ᴇɴᴠɪᴀɴᴅᴏ.. 🗿*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ʙᴀᴛᴇʀɪᴀ ғʀᴀᴄᴀ, ᴍᴀs ᴍᴇ ᴅᴇɪxᴀ sᴇᴍ ᴇɴᴇʀɢɪᴀ, ᴇɴᴠɪᴀɴᴅᴏ sᴇᴜ ᴘᴇᴅɪᴅᴏ 😹*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ɴᴏᴛɪғɪᴄᴀᴄᴀᴏ, ᴍᴀs ᴍᴇᴜ ᴄᴏʀᴀᴄᴀᴏ ᴠɪʙʀᴀ ǫᴜᴀɴᴅᴏ ᴛᴇ ᴠᴇᴊᴏ, ᴀɢᴜᴀʀᴅᴇ.. 😳*",
"*sᴀʙᴇ ᴏ ǫᴜᴇ ᴇᴜ ᴇ ᴏ ɢᴏᴏɢʟᴇ ᴛᴇᴍᴏs ᴇᴍ ᴄᴏᴍᴜᴍ? ᴀ ɢᴇɴᴛᴇ sᴀʙᴇ ᴅᴇ ᴛᴜᴅᴏ, ᴍᴀs ғɪɴɢᴇ ǫᴜᴇ ɴᴀᴏ, ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ 🙇‍♂️*",
"*ᴠᴏᴄᴇ ɴᴀᴏ ᴇ ɢᴘs, ᴍᴀs ᴠɪᴠᴇ ᴍᴇ ᴅᴇɪxᴀɴᴅᴏ sᴇᴍ ʀᴜᴍᴏ 😔, ᴇɴᴠɪᴀɴᴅᴏ ✨*",
"*sᴀʙᴇ ᴏ ǫᴜᴇ ᴇᴜ ᴇ ᴀ ᴘʀᴇɢᴜɪᴄ̧ᴀ ᴛᴇᴍᴏs ᴇᴍ ᴄᴏᴍᴜᴍ? ᴀ ɢᴇɴᴛᴇ ᴄᴏᴍᴇᴄ̧ᴀ ᴏ ᴅɪᴀ sᴇᴍ ᴠᴏɴᴛᴀᴅᴇ ɴᴇɴʜᴜᴍᴀ ᴅᴇ sᴇʀᴠɪʀ ᴏs ᴏᴜᴛʀᴏs, ᴇɴᴠɪᴀɴᴅᴏ ᴀɪ 😡*",
"*sᴇ ᴘᴀᴄɪᴇ̂ɴᴄɪᴀ ғᴏssᴇ ᴅɪ́ᴠɪᴅᴀ, ᴇᴜ ᴇsᴛᴀʀɪᴀ ᴅᴇᴠᴇɴᴅᴏ ᴘʀᴏ ᴜɴɪᴠᴇʀsᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 💪*",
"*ᴛᴇᴍ ɢᴇɴᴛᴇ ǫᴜᴇ ᴇ ɪɢᴜᴀʟ ɴᴜᴠᴇᴍ... ǫᴜᴀɴᴅᴏ sᴏᴍᴇ, ᴏ ᴅɪᴀ ᴀᴛᴇ ᴍᴇʟʜᴏʀᴀ, ᴀɢᴜᴀʀᴅᴇ.. 🦜*",
"*📆 ᴇᴍ 365 ᴅɪᴀs ᴜ́ᴛᴇɪs ᴛᴇʀᴍɪɴᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ 😂 ᴍᴇᴍᴇ, ᴛᴏ ᴇɴᴠɪᴀɴᴅᴏ! 😻*",
"*sᴀɪ ᴅᴏ ᴍᴇɪᴏ ǫᴜᴇ ᴇᴜ ᴊᴀ ᴇsᴛᴏᴜ ᴇɴғɪᴀɴᴅᴏ, ᴏᴘᴀ ᴅɪɢᴏ.. ᴇɴᴠɪᴀɴᴅᴏ! 😹*",
"*sᴏᴜ ᴜᴍ ᴘʀᴏᴊᴇᴛᴏ ғᴇɪᴛᴏ ᴘᴀʀᴀ ᴇɴᴛʀᴇɢᴀʀ ᴛᴜᴅᴏ ʀᴀ́ᴘɪᴅᴏ ᴇ ᴇғɪᴄᴀᴢ, sᴇᴍᴘʀᴇ ᴍᴇʟʜᴏʀᴀɴᴅᴏ ɴᴀ ᴏᴛɪᴍɪᴢᴀᴄ̧ᴀ̃ᴏ ᴇ ᴅᴇsᴇᴍᴘᴇɴʜᴏ, ᴇɴᴠɪᴀɴᴅᴏ.. ⚡*",
"*ᴀ ᴠɪᴅᴀ ᴇ ᴀᴘᴇɴᴀs ᴜᴍᴀ, ᴇɴᴛᴀ̃ᴏ ᴀᴘʀᴏᴠᴇɪᴛᴇ ᴇʟᴀ sᴇᴍ sᴇ ᴘʀᴇᴏᴄᴜᴘᴀʀ ᴍᴜɪᴛᴏ ᴄᴏᴍ ᴀs ᴄᴏɪsᴀs, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 🙇‍♂️*",
"*sᴀʙᴇ ᴀ ᴅɪғᴇʀᴇɴᴄᴀ ᴇɴᴛʀᴇ ᴇᴜ ᴇ sᴇᴜ(ᴀ) ᴇx? ᴇᴜ sᴇᴍᴘʀᴇ ᴇsᴛᴀʀᴇɪ ᴄᴏᴍ ᴠᴏᴄᴇ, ᴍᴀs ᴇ ᴇʟᴇ(ᴀ)? ᴛᴇ ᴀʙᴀɴᴅᴏɴᴏᴜ ᴄᴏᴍᴏ sᴇ ɴᴀᴏ ғᴏssᴇ ɴᴀᴅᴀ.. ᴇɴᴠɪᴀɴᴅᴏ 🥲*"  
]
return response[Math.floor(Math.random() * response.length)];
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `「💙」
- *🧊 | @${menc_os2.split("@")[0]} ʀᴇᴄᴇʙᴇᴜ ᴜᴍᴀ ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀ.*
- *⚠️ | ᴛᴏᴛᴀʟ: ${dfqn}/3*
- *📌 | ᴀᴏ ᴀᴛɪɴɢɪʀ 3/3, ꜱᴇʀᴀ́ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ.*`
}

exports.finishAdvertencia = (menc_os2) => {
return `「💙」
- *🧊 | @${menc_os2.split("@")[0]} ᴀᴛɪɴɢɪᴜ 3/3 ᴀᴅᴠᴇʀᴛᴇ̂ɴᴄɪᴀꜱ.*
- *🚫 | ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ.*
- *👨‍💻 | ᴇꜱᴘᴇʀᴀᴍᴏꜱ ǫᴜᴇ ᴀᴘʀᴇɴᴅᴀ ᴄᴏᴍ ᴏꜱ ᴇʀʀᴏꜱ.*`
}

exports.aluguel = (ownerNumber, NumeroDoBot, NomeDoBot) => {
return `「🧊」 *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎, 𝐆𝐀𝐋𝐄𝐑𝐀!*
- *🤖 | ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ɢʀᴜᴘᴏ ᴇxᴘɪʀᴏᴜ.* ↴

『⛔』 *ᴀᴄᴇssᴏ ᴅᴏ ʙᴏᴛ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ*
> _ᴏ ᴘᴇʀɪ́ᴏᴅᴏ ᴅᴏ ᴄᴏɴᴛʀᴀᴛᴏ ᴄʜᴇɢᴏᴜ ᴀᴏ ғɪᴍ._

『📭』 *ᴏ ǫᴜᴇ ɪssᴏ sɪɢɴɪғɪᴄᴀ?*
> *• ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ sᴇʀᴀ́ ᴇɴᴠɪᴀᴅᴏ*
> *• ᴀᴜᴛᴏᴍᴀᴄ̧ᴏ̃ᴇs ғᴏʀᴀᴍ sᴜsᴘᴇɴsᴀs*
> *• ғᴜɴᴄ̧ᴏ̃ᴇs ᴇ sɪsᴛᴇᴍᴀs ᴅᴇsʟɪɢᴀᴅᴏs*
> *• ɢʀᴜᴘᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ ᴀᴛᴇ́ ᴀ ʀᴇɴᴏᴠᴀᴄ̧ᴀ̃ᴏ*

『🗿』 *ǫᴜᴇʀ ʀᴇɴᴏᴠᴀʀ ᴏ ᴀʟᴜɢᴜᴇʟ?*
> _ᴇ́ sɪᴍᴘʟᴇs, ʙᴀsᴛᴀ ғᴀʟᴀʀ ᴄᴏᴍ ᴏ ᴅᴏɴᴏ._

『✨』 *ɴᴜ́ᴍᴇʀᴏ ᴅᴏ ᴅᴏɴᴏ*
> https://wa.me/${ownerNumber}

> *ᴀᴘᴏ́s ᴏ ᴘᴀɢᴀᴍᴇɴᴛᴏ, ᴏ ʙᴏᴛ ᴠᴏʟᴛᴀʀᴀ́ ᴀ ғᴜɴᴄɪᴏɴᴀʀ ɴᴏʀᴍᴀʟᴍᴇɴᴛᴇ 💁‍♂️*

— ${NomeDoBot}`;
};
exports.shazam = (menc, infoMusica, sender) => {
    return `「💿」 @${menc.split('@')[0]}
- *💁‍♂️ | ᴜᴍᴀ ᴍᴜꜱɪᴄᴀ ᴇꜱᴛᴀ́ ɪᴅᴇɴᴛɪꜰɪᴄᴀᴅᴀ…* ↴

『🎤』 ${infoMusica.artista}
『🎵』 ${infoMusica.titulo}
『💽』 ${infoMusica.album}
『🏷️』 ${infoMusica.rotulo}

*_ᴠɪ́ᴅᴇᴏ ᴇ ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇꜱ ʏᴏᴜᴛᴜʙᴇ_*
『📺』 ${infoMusica.tituloYT}
『⏱️』 ${infoMusica.duracaoYT}
『👁️』 ${infoMusica.viewsYT}
『📅』 ${infoMusica.publicadoYT}
『🔗』 ${infoMusica.linkYT}

> *🕊️ | @${sender.split('@')[0]} ᴘᴏᴅᴇ ᴄᴏᴍᴘᴀʀᴛɪʀ ᴇ ᴄᴏᴘɪᴀʀ ᴏ ʟɪɴᴋ ᴅᴇ ᴍᴜꜱɪᴄᴀ*`;
};

exports.errorCommandLink = () => {
  return "🔗 Verifique se o link está correto e tente novamente.";
};
exports.checkme = (u) => {
return `╭ֹܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╮
┃ ┍─݊━⵿໋݊─⊣ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊢─⵿໋݊━⵿໋݊━⵿໋݊─┑
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴜsᴜᴀ́ʀɪᴏ:*  @${u.id.split('@')[0]}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴍᴇɴsᴀɢᴇɴs:*  ${u.messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏɴɴᴇᴄᴛ:*  ${u.aparelho}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ғɪɢᴜʀɪɴʜᴀs:*  ${u.figus}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏᴍᴀɴᴅᴏs:*  ${u.cmd_messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴠɪ́ᴅᴇᴏs:*  ${u.videos || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ɪᴍᴀɢᴇɴs:*  ${u.imagens || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴀ́ᴜᴅɪᴏs:*  ${u.audios || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴅᴏᴄᴜᴍᴇɴᴛᴏs:*  ${u.documentos || 0}
┃ └─݊━⵿⵿໋݊݊─⊢ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊣━⵿໋━⵿໋݊━⵿໋݊─┘
╰ܻܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╯`;
}

exports.check = (u) => {
return `╭ֹܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╮
┃ ┍─݊━⵿໋݊─⊣ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊢─⵿໋݊━⵿໋݊━⵿໋݊─┑
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴜsᴜᴀ́ʀɪᴏ:*  @${u.id.split('@')[0]}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴍᴇɴsᴀɢᴇɴs:*  ${u.messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏɴɴᴇᴄᴛ:*  ${u.aparelho}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ғɪɢᴜʀɪɴʜᴀs:*  ${u.figus}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏᴍᴀɴᴅᴏs:*  ${u.cmd_messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴠɪ́ᴅᴇᴏs:*  ${u.videos || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ɪᴍᴀɢᴇɴs:*  ${u.imagens || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴀ́ᴜᴅɪᴏs:*  ${u.audios || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴅᴏᴄᴜᴍᴇɴᴛᴏs:*  ${u.documentos || 0}
┃ └─݊━⵿⵿໋݊݊─⊢ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊣━⵿໋━⵿໋݊━⵿໋݊─┘
╰ܻܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╯`;
}

exports.atividade = (u) => {
return `╭ֹܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╮
┃ ┍─݊━⵿໋݊─⊣ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊢─⵿໋݊━⵿໋݊━⵿໋݊─┑
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴜsᴜᴀ́ʀɪᴏ:*  @${u.id.split('@')[0]}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴍᴇɴsᴀɢᴇɴs:*  ${u.messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏɴɴᴇᴄᴛ:*  ${u.aparelho}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ғɪɢᴜʀɪɴʜᴀs:*  ${u.figus}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏᴍᴀɴᴅᴏs:*  ${u.cmd_messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴠɪ́ᴅᴇᴏs:*  ${u.videos || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ɪᴍᴀɢᴇɴs:*  ${u.imagens || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴀ́ᴜᴅɪᴏs:*  ${u.audios || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴅᴏᴄᴜᴍᴇɴᴛᴏs:*  ${u.documentos || 0}
┃ └─݊━⵿⵿໋݊݊─⊢ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊣━⵿໋━⵿໋݊━⵿໋݊─┘
╰ܻܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╯\n\n`;
}

exports.rankativo = (u, i) => {
return `╭ֹܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╮
┃ ┍─݊━⵿໋݊─⊣ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊢─⵿໋݊━⵿໋݊━⵿໋݊─┑
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *${i + 1}º ʟᴜɢᴀʀ 🏆*
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴜsᴜᴀ́ʀɪᴏ:*  @${u.id.split('@')[0]}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴍᴇɴsᴀɢᴇɴs:*  ${u.messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏɴɴᴇᴄᴛ:*  ${u.aparelho}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ғɪɢᴜʀɪɴʜᴀs:*  ${u.figus}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏᴍᴀɴᴅᴏs:*  ${u.cmd_messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴠɪ́ᴅᴇᴏs:*  ${u.videos || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ɪᴍᴀɢᴇɴs:*  ${u.imagens || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴀ́ᴜᴅɪᴏs:*  ${u.audios || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴅᴏᴄᴜᴍᴇɴᴛᴏs:*  ${u.documentos || 0}
┃ └─݊━⵿⵿໋݊݊─⊢ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊣━⵿໋━⵿໋݊━⵿໋݊─┘
╰ܻܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╯\n\n`;
}

exports.rankinativo = (u, i) => {
return `╭ֹܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╮
┃ ┍─݊━⵿໋݊─⊣ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊢─⵿໋݊━⵿໋݊━⵿໋݊─┑
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *${i + 1}º ɪɴᴀᴛɪᴠᴏ 💔*
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴜsᴜᴀ́ʀɪᴏ:*  @${u.id.split('@')[0]}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴍᴇɴsᴀɢᴇɴs:*  ${u.messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏɴɴᴇᴄᴛ:*  ${u.aparelho}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ғɪɢᴜʀɪɴʜᴀs:*  ${u.figus}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴄᴏᴍᴀɴᴅᴏs:*  ${u.cmd_messages}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴠɪ́ᴅᴇᴏs:*  ${u.videos || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ɪᴍᴀɢᴇɴs:*  ${u.imagens || 0}
┃✦𝆺𝅥˚ঔৣ͜͡ீ͜❥͜💙  *ᴀ́ᴜᴅɪᴏs:*  ${u.audios || 0}
┃✦𝼏˚ঔৣ͜͡ீ͜❥͜💙  *ᴅᴏᴄᴜᴍᴇɴᴛᴏs:*  ${u.documentos || 0}
┃ └─݊━⵿⵿໋݊݊─⊢ (𔓕᳝ׅ ٜ፝⃐⃑֟۫🧊 ٜ፝⃐⃑֟۫𔓕᳝ׅ) ⊣━⵿໋━⵿໋݊━⵿໋݊─┘
╰ܻܻ╼֮͊͜❀ֹ݄͜┅᳞֟፝┈̤፟━⵿໋݊━⵿໋݊━⵿݊⛩️ᮬ᳘ᰰ━⵿໋݊━⵿໋݊━⵿໋݊┈᳞֟፝┅ֹ݄͜❀֮͜╾ֹܻ͊╯\n\n`;
}
exports.namoro = (namoro1, C12, sender, prefix) => {
return `*「✨」 ᴜᴍ ɴᴏᴠᴏ ʟᴀᴄ̧ᴏ ғᴏɪ ғᴏʀᴍᴀᴅᴏ 「💞」*
*@${namoro1[C12].usu1.split('@')[0]} ᴇ @${sender.split('@')[0]} ᴅᴇᴄɪᴅɪʀᴀᴍ ꜱᴇɢᴜɪʀ ᴏ ᴍᴇꜱᴍᴏ ᴄᴀᴍɪɴʜᴏ.*

*💍 | ᴀ ᴘᴀʀᴛɪʀ ᴅᴇ ᴀɢᴏʀᴀ, ꜱᴀ̃ᴏ ᴜᴍ ᴄᴀꜱᴀʟ ᴏꜰɪᴄɪᴀʟ.*

• *📖 | ᴘᴀʀᴀ ᴠᴇʀ ᴏꜱ ᴅᴇᴛᴀʟʜᴇꜱ ᴅᴏ ʀᴇʟᴀᴄɪᴏɴᴀᴍᴇɴᴛᴏ: ${prefix}minhadupla*

• *ǫᴜᴇ ᴇꜱᴛᴀ ᴜɴɪᴀ̃ᴏ ᴛʀᴀɢᴀ ʙᴏɴꜱ ᴍᴏᴍᴇɴᴛᴏꜱ 💖*`;
};

exports.pedidoNamoro = (menc_os2, sender, prefix) => {
return `「💌」 @${menc_os2.split('@')[0]}
- *❤️ | ᴜᴍ ᴄᴏʀᴀᴄ̧ᴀ̃ᴏ ᴇꜱᴛᴀ́ ᴘᴇɴꜱᴀɴᴅᴏ ᴇᴍ ᴠᴏᴄᴇ̂…* ↴

『💞』 @${sender.split('@')[0]}

*_ᴅɪɢɪᴛᴇ『 sɪᴍ 』 ᴘᴀʀᴀ ᴀᴄᴇɪᴛᴀʀ ᴇꜱᴛᴇ ᴘᴇᴅɪᴅᴏ
ᴏᴜ 『 ɴᴀᴏ 』 ᴘᴀʀᴀ ʀᴇᴄᴜꜱᴀʀ._*

> *🕊️ | @${sender.split('@')[0]} ᴘᴏᴅᴇ ᴄᴀɴᴄᴇʟᴀʀ ᴄᴏᴍ: ${prefix}cancelar*`;
};

exports.minhaDupla = (parceiro1, parceiro2, tempoJuntos, dupla) => {
return `「💖」 @${parceiro1.split('@')[0]}
- *💍 | ᴄᴏᴍᴘᴀʀᴛɪʟʜᴀ ᴏ ᴄᴏʀᴀᴄ̧ᴀ̃ᴏ ᴄᴏᴍ* ↴
『💗』 @${parceiro2.split('@')[0]}

  • 『 *ʜᴀ ${tempoJuntos}* 』 •

*⏳ | ᴜɴɪᴅᴏꜱ ᴅᴇꜱᴅᴇ ${dupla.hora || '??:??'} ᴅᴏ ᴅɪᴀ ${dupla.data || '??/??/????'}*`;
};
exports.rgaluguel = (dataFormatada) => {
return `「💙」 ᴜᴍ ɴᴏᴠᴏ ᴘᴇʀɪ́ᴏᴅᴏ ғᴏɪ ᴛᴇᴄɪᴅᴏ —
ᴇꜱᴛᴇ ɢʀᴜᴘᴏ ᴀɢᴏʀᴀ ᴇsᴛᴀ́ ᴏ ᴀʟᴜɢᴜᴇʟ ᴏ, ꜱᴏʙ ᴘʀᴏᴛᴇᴄ̧ᴀ̃ᴏ ᴘᴇʟᴏ ᴛᴇᴍᴘᴏ ǫᴜᴇ ғᴏɪ ᴄᴏᴍᴘʀᴀᴅᴏ.  
⏳ ᴠᴇɴᴄɪᴍᴇɴᴛᴏ: ${dataFormatada}  
🧊 ᴀᴘʀᴏᴠᴇɪᴛᴇᴍ ᴄᴀᴅᴀ ᴍᴏᴍᴇɴᴛᴏ… ᴇɴǫᴜᴀɴᴛᴏ ᴏ ᴀʟᴜɢᴜᴇʟ ᴍᴀɴᴛᴇ́ᴍ.`
}

exports.veraluguel = (dataFormada, dias, horas, min) => {
return `「💙」 ᴏ ᴀʟᴜɢᴜᴇʟ ꜱᴇɢᴜᴇ ᴀᴛɪᴠᴏ —
📅 ᴇxᴘɪʀᴀ ᴇᴍ ${dataFormada}, ᴄᴏᴍ ${dias}ᴅ ${horas}ʜ ${min}ᴍ ʀᴇꜱᴛᴀɴᴅᴏ ɴᴏ ᴀʟᴜɢᴜᴇʟ .`
}
exports.playResult = (data) => {
  return `      *🎵「𝐅𝐔𝐑𝐈𝐍𝐀 PLAY ÁUDIO」🎵*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp3
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 
*👨‍💻 Desenvolvido por:* 𝙽𝙰𝙻𝙳𝙾 
*🖇 Link:* ${data.resultado[0].url}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.abertura = () => {
return `🔒 *ᴄʜᴀᴛ ғᴇᴄʜᴀᴅᴏ.*
ᴀ ᴘᴀʀᴛɪʀ ᴅᴇ ᴀɢᴏʀᴀ, sᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴs ᴘᴏᴅᴇᴍ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀɢᴇɴs.
ᴏʀᴅᴇᴍ ᴇ sɪʟᴇ̂ɴᴄɪᴏ sᴀ̃ᴏ ᴏʙʀɪɢᴀᴛᴏ́ʀɪᴏs.
ᴀᴄ̧ᴀ̃ᴏ ᴀᴜᴛᴏᴍᴀ́ᴛɪᴄᴀ ᴘᴇʟᴀ 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦.`
}

exports.fechamento = (horario) => {
return `🔓 *ᴄʜᴀᴛ ʟɪʙᴇʀᴀᴅᴏ.*
ᴀs ᴍᴇɴsᴀɢᴇɴs ғᴏʀᴀᴍ ʀᴇᴀᴛɪᴠᴀᴅᴀs àꜱ ${horario.abertura}.
ᴜsᴇᴍ ᴏ ᴄʜᴀᴛ ᴄᴏᴍ ʀᴇsᴘᴏɴsᴀʙɪʟɪᴅᴀᴅᴇ.
ᴍᴏɴɪᴛᴏʀᴀᴍᴇɴᴛᴏ ᴀᴛɪᴠᴏ ᴘᴇʟᴀ 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦.`
}

exports.whatmusic = (whatMusic, pushname) => {
return `✅ *ʀᴇsᴘᴏsᴛᴀ ᴄᴏʀʀᴇᴛᴀ:* ${whatMusic.resposta}.
🎉 ${pushname}, ᴠᴏᴄᴇ̂ ɢᴀɴʜᴏᴜ 5 ɴ-ᴄᴏɪɴs.
⏳ ᴘʀᴏ́xɪᴍᴏ ᴊᴏɢᴏ ᴇᴍ 5 ꜱᴇɢᴜɴᴅᴏs.`
}

exports.idade = (q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot) => {
  return `「🎂」 *ɪɴꜰᴏʀᴍᴀᴄ̧ᴏ̃ᴇꜱ ᴅᴇ ɴᴀꜱᴄɪᴍᴇɴᴛᴏ ᴅᴇ ${q}* ↴

*🌟 ɪᴅᴀᴅᴇ:* ${anos} ᴀɴᴏs, ${meses} ᴍᴇsᴇs ᴇ ${dias} ᴅɪᴀs

『📊』 *ᴇsᴛᴀᴛɪꜱᴛɪᴄᴀꜱ ᴅᴇ ᴠɪᴅᴀ:*
- 🩸 ᴅɪᴀs ᴠɪᴠɪᴅᴏs: ${diasVividos}
- ⏰ ʜᴏʀᴀs ᴠɪᴠɪᴅᴀs: ${horasVividas}
- ⏱ ᴍɪɴᴜᴛᴏs ᴠɪᴠɪᴅᴏs: ${minutosVividos}
- 🧊 ᴅɪᴀs ᴘᴀʀᴀ ᴏ ᴘʀᴏxɪᴍᴏ ᴀɴɪᴠᴇʀsᴀʀɪᴏ: ${diasParaAniversario}

> *🤖 | ${NomeDoBot}*`;
};

exports.ausente = (afkUser, tempo, m) => {
  return `「💙」 @${m.split('@')[0]}
- *💤 | ᴏ ᴜꜱᴜᴀʀɪᴏ ᴇꜱᴛᴀ́ ᴀᴜꜱᴇɴᴛᴇ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ…* ↴

『⏱️』 ᴅᴜʀᴀᴄ̧ᴀ̃ᴏ ᴅᴀ ᴀᴜꜱᴇɴᴄɪᴀ: *${tempo}*
『📝』 ᴍᴏᴛɪᴠᴏ: *${afkUser.msg}*

> *🧊 | @${m.split('@')[0]} ɴᴀ̃ᴏ ᴘᴏᴅᴇ ʀᴇsᴘᴏɴᴅᴇʀ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ*`;
};

exports.on = (sender, tempo) => {
return `*ꜱᴇᴊᴀ ʙᴇᴍ ᴠɪɴᴅᴏ ᴅᴇ ᴠᴏʟᴛᴀ @${sender.split('@')[0]}, ᴠᴏᴄᴇ ꜰɪᴄᴏᴜ ${tempo} ᴏꜰꜰʟɪɴᴇ 💁‍♂️*`
}

exports.syntaxLogos = () => {
return `*ᴄᴀᴅᴇ ᴏ ᴛᴇxᴛᴏ ᴘʀᴀ ᴍɪᴍ ғᴀᴢᴇʀ ᴀ ʟᴏɢᴏ? 💁‍♂️*`
}

exports.playmixError = (n) => {
return `*ᴅᴇsᴄᴜʟᴘᴇ, ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇɴᴠɪᴀʀ ᴏ ${n}° ᴀᴜᴅɪᴏ...*`
}

exports.playButtonsResult = (data) => {
  return `*🎵 Título:* ${data.resultado[0].title}\n*⏰ Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos\n*📅 Postado:* ${data.resultado[0].ago}\n*📺 Canal:* ${data.resultado[0].author.name}\n*📝 Descrição:* ${data.resultado[0].description}\n\n| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.playVideo = (data) => {
  return `      *🎬「𝐅𝐔𝐑𝐈𝐍𝐀  PLAY VÍDEO」🎬*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp4
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 
*👨‍💻 Desenvolvido por:* 𝙽𝙰𝙻𝙳𝙾 
*🖇 Link:* ${data.resultado[0].url}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.playVideo2 = (data) => {
  return `      *🎬「𝐅𝐔𝐑𝐈𝐍𝐀  PLAY VÍDEO HD」🎬*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Mp4 HD
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 
*👨‍💻 Desenvolvido por:* 𝙽𝙰𝙻𝙳𝙾 
*🖇 Link:* ${data.resultado[0].url}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.playDocumentResult = (data) => {
  return `      *📄「𝐅𝐔𝐑𝐈𝐍𝐀  PLAY DOCUMENTO」📄*

*📄 Título:* ${data.resultado[0].title}
*👤 Canal:* ${data.resultado[0].author.name}
*🕑 Duração:* ${data.resultado[0].timestamp}
*📁 Formato:* Documento Mp3
*👀 Visualizações:* ${data.resultado[0].views}
*🤖 Bot:* 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 
*👨‍💻 Desenvolvido por:* 𝙽𝙰𝙻𝙳𝙾 
*🖇 Link:* ${data.resultado[0].url}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};


exports.TiktokStalker = (data, formatNumberDecimal) => {
  return `🎵 *TikTok Stalker*

• *Nome:* ${data.resultado.users.nickname} | @${data.resultado.users.username}
• *URL:* https://tiktok.com/@${data.resultado.users.username}
• *Verificado:* ${data.resultado.users.verified === true ? "Sim" : "Não"}
• *Privado:* ${data.resultado.users.privateAccount === true ? "Sim" : "Não"}
• *Comercial:* ${data.resultado.users.commerceUser === true ? "Sim" : "Não"}
• *Região:* ${data.resultado.users.region}

📊 *Estatísticas:*
• *Seguidores:* ${formatNumberDecimal(data.resultado.stats.followerCount)}
• *Seguindo:* ${data.resultado.stats.followingCount}
• *Curtidas:* ${formatNumberDecimal(data.resultado.stats.heartCount)}
• *Vídeos:* ${formatNumberDecimal(data.resultado.stats.videoCount)}

📝 *Biografia:*
\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\`

| 💙 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};


exports.shz = (data) => {
  return `🎵 *Música:* ${data.videos[0].title}\n📝 *Descrição:* ${data.videos[0].description || "Não Encontrado."}\n⏰ *Duração:* ${data.videos[0].timestamp}\n🔗 *Link:* ${data.videos[0].url}`;
};

exports.playmixResult = (data) => {
  return `*🎵 𝐅𝐔𝐑𝐈𝐍𝐀 Play Mix - 5 resultados da sua pesquisa:*

*1°* ${data.resultado[0].title}
⏰ *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds}s

*2°* ${data.resultado[1].title}
⏰ *Duração:* ${data.resultado[1].timestamp} | ${data.resultado[1].seconds}s

*3°* ${data.resultado[2].title}
⏰ *Duração:* ${data.resultado[2].timestamp} | ${data.resultado[2].seconds}s

*4°* ${data.resultado[3].title}
⏰ *Duração:* ${data.resultado[3].timestamp} | ${data.resultado[3].seconds}s

*5°* ${data.resultado[4].title}
⏰ *Duração:* ${data.resultado[4].timestamp} | ${data.resultado[4].seconds}s

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.syntaxDownloadMusic = () => {
  return `🎵 Por favor, digite o nome de uma música ou vídeo para buscar.`;
};

exports.syntaxPlayMix = () => {
  return `🎤 Digite o nome de um artista para obter os melhores resultados.`;
};

exports.InstaStalker = (data, formatNumber, formatNumberDecimal) => {
  return `📸 *Instagram Stalker*

• *Nome:* ${data.resultado.profileName || "Usuário"} *(@${data.resultado.username})*
• *Conta Privada:* ${data.resultado.accountPrivate === true ? "Sim" : "Não"}
• *Verificado:* ${data.resultado.accountVerified === true ? "Sim" : "Não"}
• *Link Externo:* ${data.resultado.externalUrl || "Nenhum"}
• *Posts:* ${formatNumberDecimal(data.resultado.mediaCount)}
• *Seguidores:* ${formatNumberDecimal(data.resultado.followersAmount)}
• *Seguindo:* ${formatNumberDecimal(data.resultado.followingAmount)}

📝 *Biografia:*
\`\`\`${data.resultado.biography || "❌ Sem biografia!"}\`\`\`

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.TiktokStalker = (data, formatNumberDecimal) => {
  return `🎵 *TikTok Stalker*

• *Nome:* ${data.resultado.users.nickname} | @${data.resultado.users.username}
• *URL:* https://tiktok.com/@${data.resultado.users.username}
• *Verificado:* ${data.resultado.users.verified === true ? "Sim" : "Não"}
• *Privado:* ${data.resultado.users.privateAccount === true ? "Sim" : "Não"}
• *Comercial:* ${data.resultado.users.commerceUser === true ? "Sim" : "Não"}
• *Região:* ${data.resultado.users.region}

📊 *Estatísticas:*
• *Seguidores:* ${formatNumberDecimal(data.resultado.stats.followerCount)}
• *Seguindo:* ${data.resultado.stats.followingCount}
• *Curtidas:* ${formatNumberDecimal(data.resultado.stats.heartCount)}
• *Vídeos:* ${formatNumberDecimal(data.resultado.stats.videoCount)}

📝 *Biografia:*
\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\`

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.tiktokDownload = (data) => {
  return `🎵 *TikTok Download*

*👤 Usuário:* @${data.resultado.username}
*📝 Descrição:* ${data.resultado.description}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.soundcloud = (data, tinyUrl) => {
  return `🎵 *SoundCloud Download*

• *Música:* ${data.resultado.titulo}
• *Downloads:* ${data.resultado.total_downloads}

📥 *Caso não envie automaticamente, use o link:* ${tinyUrl.data}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.icmsResult = (data) => {
  return `💰 *Calculadora ICMS*

📊 *Taxa ICMS:* ${data.resultado.icms}%
💵 *Valor ICMS:* R$ ${data.resultado.icmsTotal}
💸 *Total BRL:* R$ ${data.resultado.total}
💲 *Total USD:* $ ${data.resultado.dolar}

ℹ️ *Observação:* Cálculo estimado baseado na alíquota do seu estado.

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.syntaxIcms = (prefix) => {
  return `💡 *Como usar o comando ICMS:*

*Exemplo:* ${prefix}icms 704|82

*Explicação:*
• *704* - Valor do produto
• *82* - DDD do seu estado

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.syntaxTrackParcels = (prefix) => {
  return `📦 *Como rastrear encomenda:*

*Exemplo:* ${prefix}rastrear PC123456789BR

ℹ️ *O código possui:* 9 números + 4 letras (2 no início + 2 no final)

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.invalidCodeRastrear = () => {
  return `❌ *Código inválido!*

✅ *Formato correto:* PC123456789BR
• 2 letras + 9 números + 2 letras

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.rastrearEncomenda = (dataResult, q) => {
  return (
    `📦 *Rastreamento de Encomenda*

*Código:* ${q}
*Última atualização:* ${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})

🧊 *Histórico:*
` +
    dataResult.resultado
      .map(
        (info, index) =>
          `${index + 1}. *${info.description}*\n📅 ${info.timeCount} (${info.datePost})`
      )
      .join("\n\n") +
    "\n\n| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 "
  );
};

exports.lyrics = (data, II) => {
  return `🎵 *Letra da Música*

• *Título:* ${data.resultado.name}
• *Artista:* ${data.resultado.byArtist.name}
• *Descrição:* ${data.resultado.description}
• *URL:* ${data.resultado.url}

🎤 *Letra:*
${II}${data.resultado.lyricOriginal}${II}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.result_APOD = (dataNaga, resultExp) => {
  return `🔭 *NASA - Imagem do Dia*

*Título:* ${dataNaga.nasa.title}

🌐 *Explicação:* ${resultExp.result}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.searchBooks = (getBook) => {
  return `📚 *Busca de Livros*

• *Título:* ${getBook.data.volumeInfo.title}
• *Autor:* ${getBook.data.volumeInfo.authors[0]}
• *Publicado em:* ${getBook.data.volumeInfo.publishedDate}
• *Editora:* ${getBook.data.volumeInfo.publisher}
• *Páginas:* ${getBook.data.volumeInfo.pageCount}

📝 *Descrição:* ${getBook.data.volumeInfo.description}

👓 *Ler online:* ${getBook.data.accessInfo.webReaderLink}
➕ *Mais info:* ${getBook.data.volumeInfo.canonicalVolumeLink}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.mediafireDownload = (ABC, encurt) => {
  return `📁 *MediaFire Download*

• *Nome:* ${ABC.resultado.nama}
• *Tamanho:* ${ABC.resultado.size}
• *Tipo:* ${ABC.resultado.mime}

⏳ *Enviando arquivo... Aguarde!*

💡 *Demorou?* Use o link: ${encurt.data}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.horoscopo = (q, ABC) => {
  return `🔮 *Horóscopo*

*Signo:* ${q}
${ABC.resultado.inform}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.respostaChatGPT = (dataResulted) => {
  return `🤖 *𝐅𝐔𝐑𝐈𝐍𝐀 IA*

${dataResulted.result}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.respostaResumida = (dataResulted) => {
  return `📝 *Resumo*

${dataResulted.result}

| BY 𝐅𝐔𝐑𝐈𝐍𝐀 𝐕5 💦 `;
};

exports.respostaRedacao = (dataResulted) => {
  return `${dataResulted.result}`;
};

exports.wikiResposta = (wikis) => {
  return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`;
};

exports.googleImage = (data) => {
  return `• Título: *${data.origin.title || "Não existe título na imagem."}*\n• URL: *${data.origin.website.url || "Sem URL."}* \n• Fonte: *${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_*\n• Resolução: *${data.height || "0"} × ${data.width || "0"}*`;
};

exports.aptoide = (getApk, sizeApk, lnDown) => {
  return `• Nome: *${getApk.name}*\n• Pacote do aplicativo à ser enviado: *${getApk.package}*\n• Tamanho do arquivo à ser enviado por mim: *${sizeApk} MB*\n• Versão do aplicativo à ser enviada por mim: *${getApk.file.vername}*\n——\n• [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`;
};

exports.memesImages = (teks) => {
  return `${teks.titulo} (Baixado por Akame Supremacy)`;
};

exports.iFunnyVideo = (teks) => {
  return `${teks.titulo} (Baixado por Akame Supremacy)`;
};

exports.translator = (bla) => {
  return `Seu texto foi traduzido com sucesso: ${bla.result}`;
};

exports.smartphoneInfo = (smartInfo) => {
  return `• *Smartphone:* ${smartInfo.resultado.nomeCelular}\n• *Resumo:* ${smartInfo.resultado.informações}\n–\n• *Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`;
};

exports.clima = (wttrin) => {
  return `⚠️️ Sobre o clima de agora no local.\n–\n→ *Local:* ${wttrin.nearest_area
    .map(
      (j, i) =>
        j.areaName[i].value +
        ", " +
        j.region[i].value +
        ", " +
        j.country[i].value
    )
    .flat()
    .join(" | ")}\n→ *Temperatura atual:* ${wttrin.current_condition
    .map((j) => j.temp_C)
    .flat()
    .join(" | ")} C° - [${wttrin.current_condition
    .map((j) => j.temp_F)
    .flat()
    .join(" | ")} F°]\n→ *Sensação térmica:* ${wttrin.current_condition
    .map((j) => j.FeelsLikeC)
    .flat()
    .join(" | ")} C° = [${wttrin.current_condition
    .map((j) => j.FeelsLikeF)
    .flat()
    .join(" | ")} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition
    .map((j) => j.humidity)
    .flat()
    .join(" | ")}%\n→ *Chuva em polegadas:* ${wttrin.current_condition
    .map((j) => j.precipInches)
    .flat()
    .join(" | ")} Pol - [${wttrin.current_condition
    .map((j) => j.precipMM)
    .flat()
    .join(" | ")} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition
    .map((j) => j.cloudcover)
    .flat()
    .join(" | ")}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition
    .map((j) => j.uvIndex)
    .flat()
    .join(" | ")}\n→ *Nivel de visibilidade:* ${wttrin.current_condition
    .map((j) => j.visibility)
    .flat()
    .join(" | ")} KM - [${wttrin.current_condition
    .map((j) => j.visibilityMiles)
    .flat()
    .join(" | ")} M.]\n→ *Descrição do clima:* ${wttrin.current_condition
    .map((j) => j.weatherDesc)
    .flat()
    .map((j) => j.value)
    .flat()
    .join(", ")} - [ID #${wttrin.current_condition
    .map((j) => j.weatherCode)
    .flat()
    .join(" | ")}]\n→ *Direção do vento:* ${wttrin.current_condition
    .map((j) => j.winddir16Point)
    .flat()
    .join(", ")} - [${wttrin.current_condition
    .map((j) => j.winddirDegree)
    .flat()
    .join(", ")}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition
    .map((j) => j.windspeedKmph)
    .flat()
    .join(", ")} KM - [${wttrin.current_condition
    .map((j) => j.windspeedMiles)
    .flat()
    .join(", ")} M.]\n→ *Pressão do ar:* ${wttrin.current_condition
    .map((j) => j.pressure)
    .flat()
    .join(" | ")} hPa - [${wttrin.current_condition
    .map((j) => j.pressureInches)
    .flat()
    .join(
      " | "
    )} mmHg]\n–\n️🏘 Algumas informações do local.\n–\n→ *Tipo de requisição:* ${wttrin.request
    .map((j) => j.type)
    .flat()
    .join(" | ")}\n→ *Local da requisição:* ${wttrin.request
    .map((j) => j.query)
    .flat()
    .join(" | ")}\n→ *Local mais aproximado:* ${wttrin.nearest_area
    .map((j) => j.latitude)
    .flat()
    .join(" | ")} Lat. | ${wttrin.nearest_area
    .map((j) => j.longitude)
    .flat()
    .join(" | ")} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area
    .map((j) => j.population)
    .flat()
    .join(" | ")}\n→ *Data agora no local:* ${wttrin.current_condition
    .map((j) => j.localObsDateTime)
    .flat()
    .join(", ")}\n→ *Tempo de observação:* ${wttrin.current_condition
    .map((j) => j.observation_time)
    .flat()
    .join(", ")}`;
};

exports.movies = (movieInfo) => {
  return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Data de Lançamento: *${movieInfo.data.results[0].release_date}*\n• Avaliações: *${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)*\n• Popularidade do Filme (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${movieInfo.data.results[0].adult ? "Sim." : "Não."}*\n• Linguagem Oficial do Filme: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`;
};

exports.series = (serieInfo) => {
  return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Data de Lançamento: *${serieInfo.data.results[0].first_air_date}*\n• Avaliações: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidade da Série (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${serieInfo.data.results[0].adult ? "Sim." : "Não."}*\n• Linguagem Oficial da Série: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`;
};

exports.searchIpAdress = (ip) => {
  return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`;
};

exports.searchCep = (res) => {
  return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`;
};

exports.noresult = () => {
  return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`;
};

exports.profileInformation = (
  pushname,
  sender,
  info,
  isCargo,
  isChVip,
  putar,
  putar2,
  gostosurar,
  gostosurar2,
  nivelgador,
  nivelgado2r,
  programa,
  status,
  conselho
) => {
  return `ຊ 𝙽𝚘𝚖𝚎: *${pushname}*\nຊ 𝙽𝚞𝚖𝚎𝚛𝚘: *https://wa.me/${sender.split("@")[0]}*\nຊ 𝙲𝚊𝚛𝚐𝚘: *${isCargo}*\nຊ 𝙿𝚘𝚜𝚜𝚞í 𝚟𝚒𝚙?: *${isChVip}*\nຊ 𝙲𝚘𝚗𝚎𝚌𝚝𝚊𝚍𝚘(𝚊) 𝚎𝚖 𝚞𝚖 𝚍𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘: ${info.key.id.length > 21 ? "*Android*" : info.key.id.substring(0, 2) == "3A" ? "*iOS*" : "*Windows/Linux*"}\nຊ 𝙱𝚒𝚘𝚐𝚛𝚊𝚏𝚒𝚊:\n*${status}*\n–\nຊ😈 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚎 𝚙𝚛𝚘𝚜𝚝𝚒𝚝𝚞𝚒çã𝚘: *${putar}${putar2}%*\nຊ😋 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚎 𝚐𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊: *${gostosurar}${gostosurar2}%*\nຊ🐂 𝚂𝚎𝚞 𝚗í𝚟𝚎𝚕 𝚍𝚘 𝚐𝚊𝚍𝚘𝚖𝚎𝚝𝚛𝚘: *${nivelgador}${nivelgado2r}%*\nຊ🍼 𝚅𝚊𝚕𝚘𝚛 𝚍𝚘 𝚜𝚎𝚞 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊: *R$${programa}*\n–\n〘 𝙲𝙾𝙽𝚂𝙴𝙻𝙷𝙾 〙\n–\n• ${conselho}`;
};

exports.warningAdvertencia = (menc_os2, dfqn) => {
  return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`;
};

exports.finishAdvertencia = (menc_os2) => {
  return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`;
};

exports.syntaxAnonymousMail = (prefix) => {
  return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5565.../eu te amo*`;
};

exports.anonymousMail = (txt2) => {
  return (
    `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n` +
    "```" +
    txt2 +
    "```"
  );
};

exports.sucessAnonymousMail = () => {
  return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`;
};

exports.bannedMessage = (blcp) => {
return `💙 @${blcp.split('@')[0]} ꜰᴏɪ ʙᴀɴɪᴅᴏ ᴅᴏ ꜱɪꜱᴛᴇᴍᴀ.
💙 ᴀɢᴏʀᴀ ɴᴀ̃ᴏ ᴘᴏᴅᴇʀᴀ́ ᴜsᴀʀ ᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ ᴅᴏ ʙᴏᴛ.
💙 ᴀᴄᴇꜱꜱᴏ ʀᴇꜱᴛʀɪᴛᴏ ᴀᴛᴇ́ ɴᴏᴠᴀ ᴅᴇᴄɪꜱᴀ̃ᴏ.`
}

exports.unbannedMessage = (blcp) => {
return `💙 @${blcp.split('@')[0]} ꜰᴏɪ ᴅᴇsʙᴀɴɪᴅᴏ ᴅᴏ ꜱɪꜱᴛᴇᴍᴀ.
💙 ᴀɢᴏʀᴀ ᴘᴏᴅᴇ ᴜsᴀʀ ᴛᴏᴅᴏꜱ ᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ ɴᴏʀᴍᴀʟᴍᴇɴᴛᴇ.
💙 ᴀᴄᴇꜱꜱᴏ ʀᴇꜱᴛᴀʙᴇʟᴇᴄɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ.`
}

exports.statusBot = (
isAntilinkgp,
isAntiLinkHard,
isAntiLinkEasy,
isAntiImg,
isAntiVid,
isAntiAudio,
Antidoc,
isAntifake,
isAutodown,
isModoCoins
) => {
return `ঔৣ͜͡ீ͜❥  *𝐒𝐓𝐀𝐓𝐔𝐒  𝐃𝐎  𝐁𝐎𝐓*  💙 ঔৣ͜͡ீ͜❥

ঔৣ͜͡ீ͜❥ .✦    𝐏𝐑𝐎𝐓𝐄𝐂𝐀̃𝐎  𝐃𝐎  𝐆𝐑𝐔𝐏𝐎
ঔৣ͜͡ீ͜❥ 📉 ✦ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝚂𝚃𝙰𝚃𝚄𝚂:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiVid ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🔗 ✦ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙶𝙿:
ঔৣ͜͡ீ͜❥ ➥  ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🚫 ✦ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙷𝙰𝚁𝙳:
ঔৣ͜͡ீ͜❥ ➥  ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ ⚠️ ✦ 𝙰𝙽𝚃𝙸 𝙻𝙸𝙽𝙺 𝙺𝙴𝙰𝚂𝚈
ঔৣ͜͡ீ͜❥ ➥ : ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🖼️ ✦ 𝙰𝙽𝚃𝙸 𝚂𝚃𝙸𝙲𝙺𝙴𝚁:
ঔৣ͜͡ீ͜❥ ➥  ${isAntifake ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🎥 ✦ 𝙰𝙽𝚃𝙸 𝚅𝙸𝙳𝙴𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiVid ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ ♾️ ✦ 𝙰𝙽𝚃𝙸 𝙳𝙳𝙳𝙻𝙸𝚂𝚃:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiLinkEasy ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🔊 ✦ 𝙰𝙽𝚃𝙸 𝙰𝚄𝙳𝙸𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiAudio ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 👥 ✦ 𝙰𝙽𝚃𝙸 𝙳𝙳𝙳
ঔৣ͜͡ீ͜❥ ➥ : ${isAntiLinkEasy ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 📞 ✦ 𝙰𝙽𝚃𝙸 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiLinkEasy ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 📄 ✦ 𝙰𝙽𝚃𝙸 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🖼️ ✦ 𝙰𝙽𝚃𝙸 𝙸𝙼𝙰𝙶𝚄𝙴𝙼:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiImg ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🌍 ✦ 𝙰𝙽𝚃𝙸 𝙵𝙰𝙺𝙴:
ঔৣ͜͡ீ͜❥ ➥  ${isAntifake ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}



ঔৣ͜͡ீ͜❥ .✦    *𝐎𝐔𝐓𝐑𝐀𝐒  𝐅𝐔𝐍𝐂̧𝐎̃𝐄𝐒*
ঔৣ͜͡ீ͜❥ ⬇️ ✦ 𝙰𝚄𝚃𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳:
ঔৣ͜͡ீ͜❥ ➥  ${isAutodown ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 💰 ✦ 𝙼𝙾𝙳𝙾 𝙲𝙾𝙸𝙽𝚂:
ঔৣ͜͡ீ͜❥ ➥  ${isModoCoins ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🎊 ✦ 𝙱𝙴𝙼𝚅𝙸𝙽𝙳𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAutodown ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🎊 ✦ 𝙱𝙴𝙼𝚅𝙸𝙽𝙳𝙾2:
ঔৣ͜͡ீ͜❥ ➥  ${isAutodown ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾𝐎"}

ঔৣ͜͡ீ͜❥ 🎊 ✦ 𝙱𝙴𝙼𝚅𝙸𝙽𝙳𝙾3:
ঔৣ͜͡ீ͜❥ ➥  ${isAutodown ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🎊 ✦ 𝙱𝙴𝙼𝚅𝙸𝙽𝙳𝙾4:
ঔৣ͜͡ீ͜❥ ➥  ${isAutodown ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🔧 ✦ 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙰𝚁𝙸𝙾:
ঔৣ͜͡ீ͜❥ ➥  ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🔧 ✦ 𝙰𝚄𝚃𝙾𝐒𝚂𝚃𝙸𝙲𝙺𝙴𝚁:
ঔৣ͜͡ீ͜❥ ➥  ${isAntilinkgp ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥ 🛡️ ✦ 𝚂𝙾_𝙰𝙳𝙼:
ঔৣ͜͡ீ͜❥ ➥  ${isAntiVid ? "✅ ✦ 𝙰𝚃𝙸𝚅𝙾" : "❌ ✦ 𝙳𝙴𝚂𝙰𝚃𝙸𝚅𝙰𝙳𝙾"}

ঔৣ͜͡ீ͜❥  𝐅𝐈𝐌  𝐃𝐎  𝐒𝐓𝐀𝐓𝐔𝐒
ঔৣ͜͡ீ͜❥  ғᴜʀɪɴᴀ  ʙᴏᴛ  ᴠ⅝
`;
};

exports.staytusBot = (
  isAnticall,
  isAntiPv,
  isAntiPv2,
  isAntiPv3,
  isAntiImg,
  isAntiVid,
  isAntiAudio,
  isAntiSticker,
  isAntiDDD,
  Antidoc,
  isAntiCtt,
  Antiloc,
  isAntilinkgp,
  isAntiLinkHard,
  isAntiLinkEasy,
  isAntifake,
  isAntiNotas,
  isAnticatalogo,
  isPalavrao,
  isAntiFlood,
  isWelkom,
  isWelkom2,
  isSimi,
  isSimi2,
  isAutofigu,
  isAutorepo,
  isModobn,
  isModoAluguel
) => {
  return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV Block: ${isAntiPv ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV (2) - Sem bloqueio de usuário(s): ${isAntiPv2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti PV (3) - Não responde ninguém no privado: ${isAntiPv3 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Imagem: ${isAntiImg ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Vídeo: ${isAntiVid ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Áudio: ${isAntiAudio ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Sticker: ${isAntiSticker ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Documento: ${Antidoc ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Contato ${isAntiCtt ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Localização: ${Antiloc ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Grupo: ${isAntilinkgp ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Hard: ${isAntiLinkHard ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Link Easy: ${isAntiLinkEasy ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Fake: ${isAntifake ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Notas: ${isAntiNotas ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Catalogo: ${isAnticatalogo ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti Palavrão: ${isPalavrao ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Limite Caracteres: ${isAntiFlood ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Bem Vindo 1: ${isWelkom ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Bem Vindo 2: ${isWelkom2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Simi 1: ${isSimi ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Simi 2: ${isSimi2 ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Auto Sticker: ${isAutofigu ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Auto Resposta: ${isAutorepo ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Modo Brincadeira: ${isModobn ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Modo Aluguel: ${isModoAluguel ? "✓ - Função ativa." : "✕ - Desativado."}\n➱ Anti DDD: ${isAntiDDD ? "✓ - Função ativa." : "✕ - Desativado."}`;
};

exports.errorUploadImage = () => {
  return `Ocorreu algum erro, desculpa! O limite do tamanho de vídeo que gero o link, é até 30 segundos.`;
};

exports.noArgsSearch = () => {
  return `Como deseja realizar uma pesquisa sem conter nenhum argumento? `;
};

exports.syntaxLogos = () => {
  return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`;
};

exports.playmixError = (n) => {
  return `Desculpe, ocorreu um erro ao enviar o resultado do ${n}° áudio..`;
};

exports.quoteCurrencies = (response) => {
  return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`;
};

exports.syntaxWebSticker = (prefix) => {
  return `🤖 *Como usar o comando 'figuweb'?*\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido.\n——\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n• *Escolhendo a Cor de Fundo:*\n\t- Você pode escolher entre 4 cores diferentes para o fundo da sua figurinha. Basta adicionar o número correspondente à cor desejada após o texto, separado por uma barra (/).\n—\n• *Numerações das cores dos fundos da figurinha de texto:*\n\t- 1. Preto (Padrão), 2. Branco, 3. Vermelho, 4. Azul\n—\n• *Exemplos de usos:*\n \t- ${prefix}figuweb Olá, como vai?/1 (Fundo na cor Preto)\n\t- ${prefix}figuweb Bom dia!/2 (Fundo na cor Branco)\n\t- ${prefix}figuweb Boa tarde!/3 (Fundo na cor Vermelho)\n\t- ${prefix}figuweb Boa noite!/4 (Fundo na cor Azul)\n—\n• Se você não especificar uma cor, o fundo padrão (Preto) será usado.`;
};

exports.groupInvitation = (sender, cnvt, prefix) => {
  return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`;
};

exports.thinkingPrefix = (pushname, prefix) => {
  return `Olá ${pushname}, aqui está meu prefixo para uso dos meus comandos: ${prefix}`;
};

exports.chamandoBot = (pushname, tempo) => {
  const response = [
    `Olá ${pushname}, em que posso ajudar?`,
    `Olá meu amiguinho(a), tudo bem?`,
    `${tempo} ${pushname}, em que posso ajudar você?`,
    `Por qual motivo você me chamas? 🤔💭`,
  ];
  buffer = response[Math.floor(Math.random() * response.length)];
  return buffer;
};

exports.removeUserAntiPlvr = () => {
  return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`;
};

exports.permissionDenied_rUser = () => {
  return `Infelizmente, não sou um administrador, entt não posso te banir!`;
};

exports.antisRandomMessage = () => {
  return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`;
};

exports.charactersAnti = () => {
  return `Muitos caracteres enviados, isto é contra as normas do grupo, por precaução, eu irei remover.`;
};

exports.markingAllMember = () => {
  return `*O participante foi removido do grupo* - Motivo: Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador...`;
};

exports.absenceRecordOwner = (NickDono, tabelin) => {
  return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n–\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`;
};

exports.absenceRecordAdmin = (blak) => {
  return `*Registro de Ausência* - O adminstrador "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n–\n☇ Mensagem: ${blak.msg}`;
};

exports.floodCommands = () => {
  return `Espere *5s* para usar outro comando ou executar o mesmo...`;
};

exports.timeRequired = () => {
  return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`;
};

exports.error = () => {
  return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`;
};

exports.messageProhibitedDetAdmin = () => {
  return `Mensagem proibida detectada, porém é admin logo a punição será anulada.`;
};

exports.messageProhibitedDetUser = () => {
  return `Mensagem proibida detectada, banindo o infrator...`;
};

exports.antiCalls = () => {
  return `Olá amigo, o anti ligar está ativo no momento, ou seja, estou recebendo as ordens de bloquear aqueles que efetuarem ligações para mim.`;
};

exports.helpGroupSettings = (prefix, sender) => {
  return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`;
};

exports.helpPhotoPrivacy = (prefix, sender) => {
  return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n🧊 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`;
};

exports.helpGroupPrivacy = (prefix, sender) => {
  return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n- Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n🧊 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`;
};

exports.errorResponseSimi = () => {
  response = [
    "Eu não entendo tudo senhor(a), sou uma simples simi! Me explique...",
    "Eu sei, eu sei! 👀 Não querendo abusar, o que é isso? Me ensina...",
    "Não me xinga amor! 😭 Eu ainda tenho muito à aprender...",
    "*An, oxe?* 🤷🏻‍♀ O que é isso? Poderia me explicar por favor humano(a)?",
    "Eu sou um(a) bot! 🤖 Mas eu não sei de tudo não! Me explica por favor?",
  ];
  return response[Math.floor(Math.random() * response.length)];
};

exports.GshowGE = (dataResult) => {
  return dataResult.resultado
    .map(
      (info, index) =>
        `${index + 1}. *${info.titulo || "Manchete sem título."}* - (${info.horarioPostagem || "Há X horas."})\n• ${info.trechoManchete || "Manchete sem descrição."}`
    )
    .join("\n–\n");
};

exports.helpNoticesG = (sender, prefix) => {
  return `😸 Olá @${sender.split("@")[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'gamenews'* | *'gamesnews'*\n–\n# O comando possuí 11 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de jogos online! Para ver notícias de Time, use: _${prefix}esportenews_.\n–\n*01.* Call of Duty: ${prefix}gamenews -cod\n*02.* Counter-Strike: ${prefix}gamenews -csgo\n*03.* FIFA 2024: ${prefix}gamenews -fifa\n*04.* Fortnite: ${prefix}gamenews -fortnite\n*05.* GameXP: ${prefix}gamenews -gamexp\n*06.* PES 2024: ${prefix}gamenews -pes\n*07.* League of Legends: ${prefix}gamenews -lol\n*08.* Pokemon: ${prefix}gamenews -pokemon\n*09.* Rainbow 6: ${prefix}gamenews -r6\n*10.* Valorant: ${prefix}gamenews -valorant\n*11.* Pokemon TCG: ${prefix}gamenews -tcg`;
};

exports.helpNoticesEsporte = (sender, prefix) => {
  return `🌟 Olá @${sender.split("@")[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n# O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`;
};
