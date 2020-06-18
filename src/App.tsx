import React from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface AppProps {}

interface AppState {
  result: {
    position: number,
    title: string,
    icon: string,
    discription: string,
    unnsei: string
  };
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      result: {
        'position': 0,
        'title': '',
        'icon': '',
        'discription': '',
        'unnsei': ''
      }
    };
  }

  uranai() {
    const runes = [{
      'position': 1,
      'title': 'フェオ',
      'icon': 'V',
      'discription': '家畜、財産、英語のfee',
      'unnsei': '何らかの報酬を得る。物事が複利的に発展していく。'
    },
    {
      'position': 2,
      'title': 'ウル',
      'icon': 'U',
      'discription': '野生の牛（オウルコス）',
      'unnsei': '猪突猛進。勇猛果敢。一途。野生のパワー。'
    },
    {
      'position': 3,
      'title': 'ソーン',
      'icon': 'SS',
      'discription': '巨人、トゲ、助言',
      'unnsei': '慎重さを要する。計画的な足止め。危険回避。'
    },
    {
      'position': 4,
      'title': 'アンスール',
      'icon': 'A',
      'discription': '口、オーディーン神、英語のanswer',
      'unnsei': '言葉のコミュニケーション。メール。情報。専門知識。'
    },
    {
      'position': 5,
      'title': 'ラド',
      'icon': 'R',
      'discription': '車輪、旅',
      'unnsei': '移動、変化。転職。遠方からの情報。車、バイク。運送業。'
    },
    {
      'position': 6,
      'title': 'ケン',
      'icon': 'KK',
      'discription': 'たいまつの火',
      'unnsei': '知恵。ひらめき。やる気。情熱。'
    },
    {
      'position': 7,
      'title': 'ギューフ',
      'icon': 'JJ',
      'discription': 'ギフト、愛情、才能',
      'unnsei': 'やさしさ。恋愛。人類愛。人を助ける事。プレゼント。'
    },
    {
      'position': 8,
      'title': 'ウィン',
      'icon': 'Q',
      'discription': '喜び、満足',
      'unnsei': 'うれしい結果。十分良くやっている。自画自賛。'
    },
    {
      'position': 9,
      'title': 'ハガル',
      'icon': 'HH',
      'discription': '雹（ひょう）',
      'unnsei': '不可避の変化。予想外のトラブル。破壊を伴う変革。'
    },
    {
      'position': 10,
      'title': 'ニイド',
      'icon': 'N',
      'discription': 'need、欠乏、忍耐',
      'unnsei': '身動きとれない。しがらみ。タロットの吊られた男。'
    },
    {
      'position': 11,
      'title': 'イス',
      'icon': 'II',
      'discription': '氷、英語のIce',
      'unnsei': '停滞。安定。冬眠。計画の凍結。冷えた関係。'
    },
    {
      'position': 12,
      'title': 'ヤラ',
      'icon': 'J',
      'discription': '一年、収穫',
      'unnsei': '収穫までのプロセス。日々の努力が大事。季節の巡り。'
    },
    {
      'position': 13,
      'title': 'ユル',
      'icon': 'E',
      'discription': 'イチイの木、死と再生、弓',
      'unnsei': '180度の方向転換。根本的な変化。くされ縁を絶つ。脱皮。'
    },
    {
      'position': 14,
      'title': 'ペオース',
      'icon': 'P',
      'discription': 'ダイスカップ、ギャンブル、神の手',
      'unnsei': '天に委ねる。思わぬ展開。意外な事実が発覚。パルプンテ。'
    },
    {
      'position': 15,
      'title': 'エオロー',
      'icon': 'X',
      'discription': '友情、保護',
      'unnsei': '頼もしい仲間。横の人間関係。霊的に守られている。'
    },
    {
      'position': 16,
      'title': 'シゲル',
      'icon': 'Z',
      'discription': '太陽、勝利',
      'unnsei': '自信満々。威風堂々。まぶしすぎる人。'
    },
    {
      'position': 17,
      'title': 'ティール',
      'icon': 'T',
      'discription': 'ティール神（マルス）、父性',
      'unnsei': '男性性。向上心。精神力。戦略をもって前進する。'
    },
    {
      'position': 18,
      'title': 'ペオーク',
      'icon': 'B',
      'discription': 'カバの木、母性、成長',
      'unnsei': '成長を見守る。母親的な役割。おせっかい。世話焼き。'
    },
    {
      'position': 19,
      'title': 'エオー',
      'icon': 'EE',
      'discription': '馬、変化',
      'unnsei': '変化。自由独立。散歩、ドライブ。職人気質。'
    },
    {
      'position': 20,
      'title': 'マン',
      'icon': 'M',
      'discription': '人間',
      'unnsei': '人間関係。相互扶助。人のふり見てわがふり直す。'
    },
    {
      'position': 21,
      'title': 'ラーグ',
      'icon': 'L',
      'discription': '水、女性性',
      'unnsei': 'ロマンス。感性。霊感。意志薄弱。幻想。流れに乗る。'
    },
    {
      'position': 22,
      'title': 'イング',
      'icon': 'MM',
      'discription': '豊穣、イング神、フレイ神',
      'unnsei': '満足のいく成果。ゴールに到達。一段落。完了。'
    },
    {
      'position': 23,
      'title': 'オセル',
      'icon': 'O',
      'discription': '故郷',
      'unnsei': '家族のしがらみ。歴史、伝統、文化。不動産。遺産。'
    },
    {
      'position': 24,
      'title': 'ダエグ',
      'icon': 'D',
      'discription': '一日、太陽の運行',
      'unnsei': '重要なルーチンワーク。一歩一歩。日常茶飯事。'
    },
    {
      'position': 25,
      'title': 'ブランク',
      'icon': '',
      'discription': '宿命',
      'unnsei': '今が運命の分岐点。他のルーンを強調。物事は白紙である。'
    }];
    let rand = Math.floor(Math.random() * runes.length);
    this.setState({
      result: runes[rand]
    });
  }

  useStyles:any = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  render() {
    let result = this.state.result;
    let iconClass = (result.icon.length > 1) ? result.icon : "";
    const classes = this.useStyles;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="App">
        <div className="map">
          <div className="result">
            <span className={'rune size-XL' + ' ' + iconClass}>
              {
                result.icon.length === 1?
                (<span>{result.icon}</span>)
                :
                ('')
              }
            </span>
          </div>
        </div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {result.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {result.discription}
            {result.unnsei}
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
            variant="contained"
            color="primary"
            onClick={() => this.uranai()}>
            占う
          </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default App;
