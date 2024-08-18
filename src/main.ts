import puppeteer, { Browser, Page } from "puppeteer";
import readlineSync from "readline-sync";

class Bot {
  private constructor(private browser: Browser, private page: Page) {}

  static async create() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    return new Bot(browser, page);
  }

  public async execute() {
    await this.page.goto("https://www.nba.com/teams");
    const option = await this.menu();
    await this.options(parseInt(option));
  }

  private async menu() {
    const teams = await this.page.evaluate(() => {
      const teams = document.querySelectorAll(
        ".TeamDivisions_wrapper__5_SVo .TeamFigure_tfContent__Vxiyh"
      ) as NodeListOf<HTMLDivElement>;

      return Array.from(teams).map((team) => {
        const anchor = team.querySelector("a");
        const name = anchor?.textContent;

        return { name };
      });
    });

    console.clear();
    console.log("Escolha o time que você deseja ver o elenco: \n");

    for (let index = 0; index < teams.length; index++) {
      console.log(`[${index + 1}] ${teams[index].name}`);
    }

    console.log("[0] SAIR\n");

    const optionSelected = readlineSync.question(
      "Digite uma opcao (0 a 30): ",
      {
        encoding: "utf-8",
      }
    );

    return optionSelected;
  }

  private async options(option: number) {
    switch (option) {
      case 0:
        await this.browser.close();
        return;
      case 1:
        await this.infosTeam("https://www.nba.com/team/1610612738");
        break;
      case 2:
        await this.infosTeam("https://www.nba.com/team/1610612751");
        break;
      case 3:
        await this.infosTeam("https://www.nba.com/team/1610612752");
        break;
      case 4:
        await this.infosTeam("https://www.nba.com/team/1610612755");
        break;
      case 5:
        await this.infosTeam("https://www.nba.com/team/1610612761");
        break;
      case 6:
        await this.infosTeam("https://www.nba.com/team/1610612741");
        break;
      case 7:
        await this.infosTeam("https://www.nba.com/team/1610612739");
        break;
      case 8:
        await this.infosTeam("https://www.nba.com/team/1610612765");
        break;
      case 9:
        await this.infosTeam("https://www.nba.com/team/1610612754");
        break;
      case 10:
        await this.infosTeam("https://www.nba.com/team/1610612749");
        break;
      case 11:
        await this.infosTeam("https://www.nba.com/team/1610612737");
        break;
      case 12:
        await this.infosTeam("https://www.nba.com/team/1610612766");
        break;
      case 13:
        await this.infosTeam("https://www.nba.com/team/1610612748");
        break;
      case 14:
        await this.infosTeam("https://www.nba.com/team/1610612753");
        break;
      case 15:
        await this.infosTeam("https://www.nba.com/team/1610612764");
        break;
      case 16:
        await this.infosTeam("https://www.nba.com/team/1610612743");
        break;
      case 17:
        await this.infosTeam("https://www.nba.com/team/1610612750");
        break;
      case 18:
        await this.infosTeam("https://www.nba.com/team/1610612760");
        break;
      case 19:
        await this.infosTeam("https://www.nba.com/team/1610612757");
        break;
      case 20:
        await this.infosTeam("https://www.nba.com/team/1610612762");
        break;
      case 21:
        await this.infosTeam("https://www.nba.com/team/1610612744");
        break;
      case 22:
        await this.infosTeam("https://www.nba.com/team/1610612746");
        break;
      case 23:
        await this.infosTeam("https://www.nba.com/team/1610612747");
        break;
      case 24:
        await this.infosTeam("https://www.nba.com/team/1610612756");
        break;
      case 25:
        await this.infosTeam("https://www.nba.com/team/1610612758");
        break;
      case 26:
        await this.infosTeam("https://www.nba.com/team/1610612742");
        break;
      case 27:
        await this.infosTeam("https://www.nba.com/team/1610612745");
        break;
      case 28:
        await this.infosTeam("https://www.nba.com/team/1610612763");
        break;
      case 29:
        await this.infosTeam("https://www.nba.com/team/1610612740");
        break;
      case 30:
        await this.infosTeam("https://www.nba.com/team/1610612759");
        break;
      default:
        console.clear();
        console.log("\nInforme uma opção válida (0 a 30)\nVoltando ao menu...");
        break;
    }

    await this.execute();
  }

  private async infosTeam(url: string) {
    await this.page.goto(url);
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const trPlayers = document.querySelectorAll(
        ".TeamRoster_content__Owdiz tbody tr"
      );

      const positions = {
        C: "Pivô",
        F: "Ala",
        G: "Armador",
        "G-F": "Armador - Ala",
        "F-G": "Ala - Armador",
        "F-C": "Ala - Pivô",
        "C-F": "Pivô - Ala",
      };

      return Array.from(trPlayers).map((player) => {
        const tdPlayer = player.querySelectorAll("td");
        const name = tdPlayer[0].textContent;
        const number = tdPlayer[1].textContent;
        const position = tdPlayer[2].textContent;
        const age = tdPlayer[6].textContent;
        const translatedPosition = positions[position as string];

        return {
          nome: name,
          número: number,
          posição: translatedPosition,
          idade: age,
        };
      });
    });

    console.log(players);

    readlineSync.keyIn("\nDigite qualquer tecla para voltar ao menu: ");
  }
}

(async () => {
  const bot = await Bot.create();
  await bot.execute();
})();
