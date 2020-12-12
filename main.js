const channelIDs = [
  '430721038226161674',
  '432566099746226178',
  '464649057462255616',
  '474211585112408074',
  '540899732206125100',
  '594852081370923018',
  '594852121967329290',
  '659378598066651136',
  '659378727129710628',
];

const liverEmojis = new Map([
  ['あ', { name: '', id: '688295826115526658' }],
    ['安土桃', { name: '50AzuchiMomo', id: '768449431976411196' }],
    ['飛鳥ひな', { name: '50AsukaHina', id: '585816497616846848' }],
    ['朝日南アカネ', { name: '50AsahinaAkane', id: '741643681962000475' }],
    ['アルス・アルマル', { name: '50ArsAlmal', id: '603540901867945994' }],
    ['アンジュ・カトリーナ', { name: '50AngeKatrina', id: '586162180873912323' }],
    ['雨森小夜', { name: '50AmemoriSayo', id: '585816402158551050' }],
    ['天宮こころ', { name: '50AmamiyaKokoro', id: '780451932627533874' }],
    ['赤羽葉子', { name: '50AkabaneYouko', id: '441609689940099072' }],
    ['愛園愛美', { name: '50AizonoManami', id: '586162141225156638' }],
    ['相羽ういは', { name: '50AibaUiha', id: '603541815081172994' }],
    ['遠北千南', { name: '50AchikitaChinami', id: '585816696456085514' }],
    ['出雲霞', { name: '49IzumoKasumi', id: '585805323705516032' }],
    ['戌亥とこ', { name: '49InuiToko', id: '586162233218826240' }],
    ['家長むぎ', { name: '49IenagaMugi', id: '426231040697303040' }],
    ['イブラヒム', { name: '49Ibrahim', id: '672427411752747009' }],
    ['宇志海いちご', { name: '48UshimiIchigo', id: '426232738174205952' }],
    ['海夜叉神', { name: '48UmiyasyanoKami', id: '585810269759078401' }],
    ['卯月コウ', { name: '48UdukiKou', id: '585805805325123594' }],
    ['エクス・アルビオ', { name: '47ExAlbio', id: '586162116759650316' }],
    ['えま★おうがすと', { name: '47EmmaAugust', id: '640010355984171039' }],
    ['える', { name: '47Elu', id: '426003601010196480' }],
    ['エリー・コニファー', { name: '47EliConifer', id: '609336365452230666' }],
    ['御伽原江良', { name: '46OtogibaraEra', id: '586162384754704384' }],
    ['小野町春香', { name: '46OnomachiHaruka', id: '586162352140058624' }],
  ['か', { name: '', id: '688295984937173055' }],
    ['語部紡', { name: '45KataribeTsumugu', id: '586162265909362688' }],
    ['神田笑一', { name: '45KandaSyouichi', id: '585816865117306880' }],
    ['叶', { name: '45Kanae', id: '768449423730540564' }],
    ['甲斐田晴', { name: '45KaidaHaru', id: '695246427084947457' }],
    ['加賀美ハヤト', { name: '45KagamiHayato', id: '596724394869522465' }],
    ['北小路ヒスイ', { name: '44KitakojiHisui', id: '741643996861956146' }],
    ['ギルザレンIII世', { name: '44Gilzaren_III', id: '426231790005518336' }],
    ['葛葉', { name: '43Kuzuha', id: '585800784466280449' }],
    ['来栖夏芽', { name: '43KurusuNatsume', id: '660861302888988683' }],
    ['黒井しば', { name: '43KuroiShiba', id: '585816738088615949' }],
    ['久遠千歳', { name: '43KudouChitose', id: '586162088246902789' }],
    ['グウェル・オス・ガール', { name: '43GweluOsGar', id: '650171239725531137' }],
    ['郡道美玲', { name: '43GundouMirei', id: '586162206782128151' }],
    ['剣持刀也', { name: '42KenmochiTouya', id: '426231247052996615' }],
    ['弦月藤士郎', { name: '42GenzukiTojiro', id: '695245410041856111' }],
  ['さ', { name: '', id: '688296092613345291' }],
    ['笹木咲', { name: '40SasakiSaku', id: '585798987471388672' }],
    ['桜凛月', { name: '40SakuraRitsuki', id: '746213386684989531' }],
    ['三枝明那', { name: '40SaegusaAkina', id: '586162412227526657' }],
    ['シスター・クレア', { name: '39SisterClaire', id: '585804937724690433' }],
    ['静凛', { name: '39ShizukaRin', id: '426004128527941642' }],
    ['白雪巴', { name: '39ShirayukiTomoe', id: '650171162038370308' }],
    ['椎名唯華', { name: '39ShiinaYuika', id: '585800563027869706' }],
    ['渋谷ハジメ', { name: '39ShibuyaHajime', id: '768450501141987339' }],
    ['シェリン・バーガンディ', { name: '39ShellinBurgundy', id: '624233755493662720' }],
    ['ジョー・力一', { name: '39JoeRikiichi', id: '585816909547569164' }],
    ['鈴谷アキ', { name: '38SuzuyaAki', id: '426004918487351296' }],
    ['鈴木勝', { name: '38SuzukiMasaru', id: '585804598522937374' }],
    ['鈴鹿詩子', { name: '38SuzukaUtako', id: '672425696563560448' }],
    ['鈴原るる', { name: '38SuzuharaLulu', id: '586166943816613898' }],
    ['周央サンゴ', { name: '38SuoSango', id: '741643765630107648' }],
    ['健屋花那', { name: '38SukoyaKana', id: '625293099140251679' }],
    ['雪汝', { name: '37Setsuna', id: '585801217855324180' }],
    ['瀬戸美夜子', { name: '37SetoMiyako', id: '586162446683602964' }],
    ['空星きらめ', { name: '36SorahoshiKirame', id: '728261069746733167' }],
  ['た', { name: '', id: '688296104613249044' }],
    ['鷹宮リオン', { name: '35TakamiyaRion', id: '585817147301691412' }],
    ['月ノ美兎', { name: '33TsukinoMito', id: '426003540515749890' }],
    ['月見しずく', { name: '33TsukimiShizuku', id: '585816778140024833' }],
    ['でびでび・でびる', { name: '32DebidebiDebiru', id: '585816316829761614' }],
    ['轟京子', { name: '31TodorokiKyouko', id: '585807752501264431' }],
    ['東堂コハク', { name: '31TodoKohaku', id: '741643756498845779' }],
    ['ドーラ', { name: '31Dola', id: '585831665302110226' }],
  ['な', { name: '', id: '688296114411143297' }],
    ['鳴門こがね', { name: '30NarutoKogane', id: '585818068844806170' }],
    ['成瀬鳴', { name: '30NaruseNaru', id: '746212139227676713' }],
    ['奈羅花', { name: '30Naraka', id: '660862201405636618' }],
    ['名伽尾アズマ', { name: '30NakaoAzuma', id: '585810211109863425' }],
    ['長尾景', { name: '30NagaoKei', id: '695246488749473892' }],
    ['西園チグサ', { name: '29NishizonoChigusa', id: '741644005284249612' }],
    ['ニュイ・ソシエール', { name: '28NuiSociere', id: '590861958060834817' }],
  ['は', { name: '', id: '688296183416094730' }],
    ['早瀬走', { name: '25HayaseSou', id: '624233735641890878' }],
    ['葉山舞鈴', { name: '25HayamaMarin', id: '590861924456202260' }],
    ['八朔ゆず', { name: '25HassakuYuzu', id: '585810240142835712' }],
    ['花畑チャイカ', { name: '25HanabatakeChaika', id: '585807981002620949' }],
    ['葉加瀬冬雪', { name: '25HakaseFuyuki', id: '596724351252955305' }],
    ['春崎エアル', { name: '25HarusakiEaru', id: '586186741400993828' }],
    ['樋口楓', { name: '24HiguchiKaede', id: '426002705480417300' }],
    ['不破湊', { name: '23FuwaMinato', id: '650171210055024653' }],
    ['伏見ガク', { name: '23FushimiGaku', id: '585832609272168498' }],
    ['フレン・E・ルスタリオ', { name: '23FurenELustario', id: '672427399589265408' }],
    ['文野環', { name: '23FuminoTamaki_Noraneko', id: '426230428731703306' }],
    ['フミ', { name: '23Fumi', id: '635070139078803459' }],
    ['ベルモンド・バンデラス', { name: '22BelmondBanderas', id: '585816359250952223' }],
    ['星川サラ', { name: '21HoshikawaSara', id: '635073940703674378' }],
    ['本間ひまわり', { name: '21HonmaHimawari', id: '585802171661156382' }],
  ['ま', { name: '', id: '688296210809094151' }],
    ['黛灰', { name: '20MayuzumiKai', id: '603540892888072212' }],
    ['魔使マオ', { name: '20MatsukaiMao', id: '640007971350511628' }],
    ['ましろ', { name: '20Mashiro', id: '660861694687576068' }],
    ['魔界ノりりむ', { name: '20MakainoRirimu', id: '585800264670511104' }],
    ['舞元啓介', { name: '20MaimotoKeisuke', id: '585816969459007498' }],
    ['町田ちま', { name: '20MachitaChima', id: '585816650494771213' }],
    ['メリッサ・キンレンカ', { name: '17MelissaKinrenka', id: '672427425526841344' }],
    ['森中花咲', { name: '16MorinakaKazaki', id: '615953167787753482' }],
    ['物述有栖', { name: '16MononobeAlice', id: '672425686379528227' }],
    ['モイラ', { name: '16Moira', id: '708898455195746384' }],
  ['や', { name: '', id: '688296249425657886' }],
    ['社築', { name: '15YasiroKizuku', id: '585806535381352458' }],
    ['闇夜乃モルル', { name: '15YamiyonoMoruru', id: '585799410722799636' }],
    ['山神カルタ', { name: '15YamagamiKaruta', id: '635073873229905951' }],
    ['矢車りね', { name: '15YagurumaRine', id: '585817060244717581' }],
    ['夢月ロア', { name: '14YuzukiRoa', id: '586162570080157696' }],
    ['夕陽リリ', { name: '14YuuhiRiri', id: '426230732416090113' }],
    ['夢追翔', { name: '14YumeoiKakeru', id: '585817093014814721' }],
    ['雪城眞尋', { name: '14YukishiroMahiro', id: '586162526195286035' }],
    ['勇気ちひろ', { name: '14YukiChihiro', id: '768449440221626379' }],
    ['夜見れな', { name: '13YorumiRena', id: '596724433545068550' }],
  ['ら', { name: '', id: '688296273949753346' }],
    ['ラトナ・プティ', { name: '12RatnaPetit', id: '746212759519232101' }],
    ['緑仙', { name: '11Ryushen', id: '585808781724876820' }],
    ['竜胆尊', { name: '11RindouMikoto', id: '585817004980568064' }],
    ['リゼ・ヘルエスタ', { name: '11LizeHelesta', id: '586162323975176215' }],
    ['ルイス・キャミー', { name: '10LuisCammy', id: '640010521822756865' }],
    ['レヴィ・エリファ', { name: '09LeviElipha', id: '586162293465939988' }],
  ['わ', { name: '', id: '688296291700047898' }],
    ['童田明治', { name: '07WarabedaMeiji', id: '586162048363397140' }],
]);

const selectedLivers = new Map();

const channelSelecter = document.getElementById('ch-selecter');
const selectedLiversField = document.getElementById('selected-livers-field');
const liverSelecterField = document.getElementById('liver-selecter-field');
const hiddenEmbed = document.getElementById('hidden-embed');
const livingUrls = document.getElementById('living-urls');
const resultText = document.getElementById('result-text');
const copyButton = document.getElementById('copy-button');
const shareButton = document.getElementById('share-button');

const updateResult = () => {
  const channelID = channelIDs[channelSelecter.selectedIndex - 1];
  const chMention = channelID ? `<#${channelID}>` : '';
  let liverEmojis = '';
  const hidden = hiddenEmbed.checked;
  const urls = livingUrls.value.trim().split(/\s/).map(url => url && hidden ? `<${url}>` : url).join(' ');

  selectedLivers.forEach(emoji => liverEmojis += ` <:${emoji.name}:${emoji.id}>`);

  resultText.value = `${chMention}${liverEmojis}\n${urls}`.trim();
}

const removeLiver = selectedLiver => {
  if (!selectedLiver.parentNode) return;

  selectedLiver.parentNode.removeChild(selectedLiver);
  selectedLivers.delete(selectedLiver.getAttribute('title'));

  updateResult();
}

const choiceLiver = liver => {
  const liverName = liver.getAttribute('title');
  const emoji = liverEmojis.get(liverName);
  if (!emoji) return;

  if (liver.getAttribute('aria-pressed') === 'true') {
    const selectedLiver = document.createElement('img');
    selectedLiver.setAttribute('id', `selected-${emoji.name}`);
    selectedLiver.setAttribute('class', 'liver-selected-button col-1 btn btn-primary p-0');
    selectedLiver.setAttribute('title', liverName);
    selectedLiver.setAttribute('src', liver.getAttribute('src'));

    selectedLiver.addEventListener('click', () => {
      liver.classList.remove('active');
      liver.setAttribute('aria-pressed', 'false');
      removeLiver(selectedLiver);
    });

    liver.addEventListener('click', () => removeLiver(selectedLiver));

    selectedLiversField.appendChild(selectedLiver);
    selectedLivers.set(liverName, emoji);

    updateResult();
  }
}

liverEmojis.forEach((emoji, name) => {
  const liver = document.createElement('img');
  liver.setAttribute('class', 'liver-select-button col-2 btn btn-outline-primary border-0 p-1');
  liver.setAttribute('title', name);
  liver.setAttribute('src', `https://cdn.discordapp.com/emojis/${emoji.id}.png`);
  liver.setAttribute('aria-pressed', 'false');
  liver.setAttribute('autocomplete', 'off');
  if (emoji.name) {
    liver.setAttribute('data-toggle', 'button');
    liver.addEventListener('click', () => choiceLiver(liver));
  }

  liverSelecterField.appendChild(liver);
});

channelSelecter.addEventListener('input', () => updateResult());
hiddenEmbed.addEventListener('input', () => updateResult());
livingUrls.addEventListener('input', () => updateResult());

copyButton.addEventListener('click', () => {
  resultText.select();
  document.execCommand('Copy');
});

shareButton.addEventListener('click', () => {
  navigator.share({ text: resultText.value })
    .catch(console.error);
});
