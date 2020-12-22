const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token

client.on("ready", () => {
  console.log("켰다.")
  client.user.setPresence({ activity: { name: "!도와줘 를 쳐보세요." }, status: "online" })
})

client.on("guildMemberAdd", (member) => {
  const guild = member.guild
  const newUser = member.user
  const welcomeChannel = guild.channels.find((channel) => channel.name == welcomeChannelName)

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
  member.roles.add(guild.roles.cache.find((r) => r.name === roleName).id)
})

client.on("guildMemberRemove", (member) => {
  const guild = member.guild
  const deleteUser = member.user
  const byeChannel = guild.channels.cache.find((channel) => channel.name == byeChannelName)

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "ping") {
    return message.reply("pong")
  }

  if(message.content == '!팔로워') {
    return message.reply('현재 팔로워858명 (일주일에 한 번씩업데이트)');
  }

  if(message.content == '!방울겜정보') {
    return message.reply("Tom Clancy's Rainbow Six Siege");
  }

  if(message.content == '!버전') {
    return message.reply("V:1.6.0")
  }

  if (message.content == '!나') {
    message.channel.send(username `${message.author.username}`);
    message,channel.send(ID `${message.author.id}`);
  }

if(message.content == '레식') {
  let embed = new Discord.MessageEmbed()
  let img = "https://cdn.discordapp.com/attachments/756326812841279572/780044006930513930/38e2f8f8445ec57636e6f2133228ee5d32d5aa316f3afc85afa8e4ae8c24f63d9d3b2a60945a776682941e178cad6a8f64dc.png"
  embed.setColor("#F7FE2E")
  .setTitle("레인보우식스 시즈")
  .setURL("https://www.ubisoft.com/ko-kr/game/rainbow-six/siege")
  .setThumbnail(img)
  .addField("현재시즌", "5년차4시즌")
  .addField("신규오퍼", "ARUNI", true)
  .addField("현재레식 오퍼 현황", "58명", true)
  .addField("현재 맵 현황", "20개", true)
  .addField("맵이름", "은행,국경,별장,클럽하우스,해안선,영사관,빈민가,요새,해리퍼드기지,저택,도스토예프스키카페,운하,오리건,오지,대통령전용기,마천루,테마파크,타워,빌라,요트")
  
  message.channel.send(embed)
}

  if (message.content == "!서버정보") {
    let embed = new Discord.MessageEmbed()
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/779522847163809802/b5a1c775-fc02-49d5-8eb4-ce1566bd23fb-profile_image-70x70.png"
    embed.setColor("#186de6")
    embed.setAuthor("server info of 방울봇 BOT", img)
    embed.setFooter(`방울봇 BOT ❤️`)
    embed.addField("RAM 사용량", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    embed.addField("사용자", `${client.users.cache.size}`, true)
    embed.addField("서버", `${client.guilds.cache.size}`, true)
    // embed.addField('channel',      `${client.channels.cache.size.toLocaleString()}`, true)
    embed.addField("Discord.js", `v${Discord.version}`, true)
    embed.addField("Node", `${process.version}`, true)

    let arr = client.guilds.cache.array()
    let list = ""
    list = `\`\`\`css\n`

    for (let i = 0; i < arr.length; i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField("list:", `${list}`)

    embed.setTimestamp()
    message.channel.send(embed)
  }

  if (message.content == "!레식핵쟁이") {
    let embed = new Discord.MessageEmbed()
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/780044006930513930/38e2f8f8445ec57636e6f2133228ee5d32d5aa316f3afc85afa8e4ae8c24f63d9d3b2a60945a776682941e178cad6a8f64dc.png"
    embed.setColor("#F7FE2E")
    .setTitle('핵쟁이박제')
    .setThumbnail(img)
    .addField('핵쟁이 닉넴', '아직 핵쟁이가 없네요 확실하게 핵쟁인 게 확인되면 개발자한테 DM보내는 건 어떨가요?(HK416.wHL#3293)')
    .addField("부스팅박제", "아직 부스팅한사람이 안 보이네요~ 개발자한테 DM을 보내는 건 어떨까요? (HK416.wHL#3293)")
    .addField("핵쟁이가 밴 안당하는 이유", "여러분 레식에서 밴당하는 핵쟁이들은 대부분 공짜핵을 사용한것입니다\n나머지 유료핵쟁이들은 대부분 신고를 해도 밴당하지 않죠 왜냐? 핵기능중 신고기능 삭제라는 것 때문이죠\n")
    .setTimestamp()
    .setFooter("화이트해커만듬", img)
    message.channel.send(embed)
  }

  if (message.content == "!방울정보") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/779522847163809802/b5a1c775-fc02-49d5-8eb4-ce1566bd23fb-profile_image-70x70.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("#75ECF3")
      .setTitle("생방송")
      .setURL("https://www.twitch.tv/bang_ul_2")
      .setAuthor("금방울", img, "https://www.twitch.tv/bang_ul_2")
      .setThumbnail(img)
      .addField("현재팔로워", "858명")
      .addField("디스코드서버", "https://discord.gg/UzcrbzNqvb", true)
      .addField("방울샵링크", "https://marpple.shop/kr/bang_ul", true)
      .addField("트윕", "https://twip.kr/bang_ul_2", true)
      .addField("대회경력제1회 바유배 레인보우식스 시즈 스트리머대회 3위", "여고생쟝 레식한데!/언팔할꺼면 팔로우 no.\n")
      .setTimestamp()
      .setFooter("화이트해커만듬", img)

    message.channel.send(embed)
  } 

  if(message.content == "!방울봇소식") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/781402669302546452/OIP_1.PNG"
    let embed = new Discord.MessageEmbed()
    embed.setColor("#75ECF3")
    .setTitle("방울 소식통")
    .setAuthor("방울뉴스", img)
    .addField('업데이트소식', "요즘 업데이트가 없는 이유는 파이썬으로 봇을 만들려고 개발자가 공부중이라 업데이트가 없었습니다.\n파이썬으로 방울봇을 만들예정...")
    .addField("중요소식", "지금 새로운 방울봇 기능을 더 추가하기 위해 노력중...")
    .setTimestamp()
    .setFooter("화이트해커발행", img)

    message.channel.send(embed)
  }

  if(message.content == '!방울장비') {
    let embed = new Discord.MessageEmbed()
    .setTitle("금방울")
    embed.setColor("#75ECF3")
    .setURL("https://www.twitch.tv/bang_ul_2")
    .addField("케이스", "IN WIN 303C 화이트")
    .addField("CPU", "AMD 라이젠 7 마티스 3세대 3700X CPU 100-100000071BOX")
    .addField("쿨러", "DarkFlash Tracer DT-360 RGB [CPU쿨러]")
    .addField("메인보드", "[MSI] a+MSI B450M 박격포 티타늄")
    .addField("램", "삼성전자 DDR4 8G PC4-25600 메모리 램8기가 RAM 데스크탑 램")
    .addField("그래픽카드", "갤럭시 GALAX 지포스 GTX 1660 SUPER EX WHITE OC D6 6GB")
    .addField("SSD", "HP EX900 M.2 2280 NVMe SSD")
    .addField("SSD", "웨스턴디지털 WD 블루 SN550 1TB NVMe Internal SSD-WDS100T2B0C")
    .addField("하드디스크", "씨게이트 바라쿠다 ST2000DM008 2TB 하드디스크 2테라 HDD")
    .addField("파워", "시소닉 FOCUS GOLD GM-750 Modular")
    .addField("키보드", "로지텍 G PRO X 기계식 게이밍키보드 로지텍코리아정품")
    .addField("마우스", "로지텍코리아 G PRO WIRELESS 무선 게이밍 마우스")
    .addField("웹캠", "로지텍 프로 스트림 웹캠 C922")
    .addField("마우스패드", "로지텍 G640 Gaming Mouse Pad")
    .addField("이어폰", "삼성 정품 AKG C타입 3.5mm 이어폰 갤럭시 노트10 갤럭시 S10 갤럭시S20")
    .addField("마이크", "로데 NT1-A 콘덴서 마이크, 보컬 악기용 마이크 정품")
    .addField("오디오인터페이스", "야마하 AG06 YAMAHA 믹서형 USB 오디오 인터페이스 오디오카드 미디 인터넷방송 PA믹서 다용도 제품")
    .setTimestamp()
    message.channel.send(embed)
  }
  
  if (message.content == "!현재시간") {
    let img = "https://cdn.discordapp.com/attachments/778161142123462677/778515268737171456/U1A3ywXATJAVoKd--jFyVf6u14eqBdHL7jGYaXXtMwE.jpg"
    let embed = new Discord.MessageEmbed()
    .setTitle("현재시간")
    .setURL("https://vclock.kr/time/%EC%84%9C%EC%9A%B8/")
    .setThumbnail(img)
    .setTimestamp()
    message.channel.send(embed)
  }
  
  else if (message.content == "!도와줘") {
    let helpImg = "https://static-cdn.jtvnw.net/jtv_user_pictures/b5a1c775-fc02-49d5-8eb4-ce1566bd23fb-profile_image-70x70.png"
    let commandList = [
      { name: "ping", desc: "핑~! 퐁!" },
      { name: "!방울정보", desc: "방울님의 정보를 알려줘요.^^" },
      { name: "!도와줘", desc: "방울봇 명령어를 알려줘요.^^" },
      { name: "!전체공지", desc: "dm으로 전체 공지 보내줍니다(관리자권한 있어야되요^^)" },
      { name: "!전체공지2", desc: "전체공지를 embed형식으로 보내줘요^^"},
      { name: "!노래1~10", desc: "노래링크를 드려요~^^"},
      { name: "!방울겜정보", desc: "방울님의 게임정보를 알려줘요 ^^"},
      { name: "!현재시간", desc: "현재시간을 EMBED형식으로 알려줘요^^"},
      { name: "!서버정보", desc: "서버정보를 알려줘요~^^"},
      { name: "!레식핵쟁이", desc: "레식핵쟁이 닉넴을 알려줘요(핵쓰지마리 진짜),"},
      { name: "!방울장비", desc: "방울님이 사용중인 장비를 자세하게 소개 해줘요^^"},
      { name: "!버전", desc: "현재 버전을 알려줘요^^"},
      { name: "!팔로워", desc: "현재 팔로워수 를 보여줘요^^"},
      { name: "!방울봇소식", desc: "방울봇 관련 업데이트및사건사고를 알려줍니다."},
    ]
    let commandStr = ""
    let embed = new Discord.MessageEmbed().setAuthor("방울BOT", helpImg).setColor("#0BB8F7").setFooter(`방울BOT ❤️`).setTimestamp()

    commandList.forEach((x) => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`
    })

    embed.addField("Commands: ", commandStr)

    message.channel.send(embed)
  }

  else if (message.content == "!초대코드2") {
    client.guilds.cache.array().forEach((x) => {
      x.channels.cache
        .find((x) => x.type == "text")
        .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then((invite) => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if (err.code == 50013) {
            message.channel.send(`**${x.channels.cache.find((x) => x.type == "text").guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
          }
        })
    })
  } else if (message.content == "!초대코드") {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }
    message.guild.channels.cache
      .get(message.channel.id)
      .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then((invite) => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if (err.code == 50013) {
          message.channel.send(`**${message.guild.channels.cache.get(message.channel.id).guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
        }
      })
  } else if (message.content.startsWith("!전체공지2")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!전체공지2".length)
      let embed = new Discord.MessageEmbed().setAuthor("공지 of 방울 BOT").setColor("#186de6").setFooter(`방울 BOT ❤️`).setTimestamp()

      embed.addField("공지: ", contents)

      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(embed)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!전체공지")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!전체공지".length)
      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(`<@${message.author.id}> ${contents}`)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!청소")) {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 는 사용하수없떠욤")
    }

    if (message.channel.type != "dm" && checkPermission(message)) return

    var clearLine = message.content.slice("!청소 ".length)
    var isNum = !isNaN(clearLine)

    if (isNum && (clearLine <= 0 || 1000 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요. (청소기능 작동하지 않으면 봇에게 관리자 권한을 주세요)")
      return
    } else if (!isNum) {

      if (message.content.split("<@").length == 2) {
        if (isNaN(message.content.split(" ")[2])) return

        var user = message.content.split(" ")[1].split("<@!")[1].split(">")[0]
        var count = parseInt(message.content.split(" ")[2]) + 1
        let _cnt = 0

        message.channel.messages.fetch().then((collected) => {
          collected.every((msg) => {
            if (msg.author.id == user) {
              msg.delete()
              ++_cnt
            }
            return !(_cnt == count)
          })
        })
      }
    } else {
      message.channel
        .bulkDelete(parseInt(clearLine) + 1)
        .then(() => {
          message.channel.send(`<@${message.author.id}> ${parseInt(clearLine)} 개의 메시지를 삭제했습니다. (이 메시지는 잠시 후 사라집니다.)`).then((msg) => msg.delete({ timeout: 3000 }))
        })
        .catch(console.error)
    }
  }

})

function checkPermission(message) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> 명령어를 수행할 관리자 권한을 소지하고 있지않습니다.`)
    return true
  } else {
    return false
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str
  limitLen -= tmp.length

  for (let i = 0; i < limitLen; i++) {
    tmp += " "
  }

  return tmp
}

client.login(token)