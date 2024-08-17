import puppeteer, { Browser, Page } from "puppeteer";
import readlineSync from "readline-sync";

class Bot {
  private constructor(private browser: Browser, private page: Page) {}

  static async create() {
    const browser = await puppeteer.launch({ headless: false });
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

    for (let index = 0; index < teams.length; index++) {
      console.log(`[${index + 1}] ${teams[index].name}`);
    }

    const optionSelected = readlineSync.keyIn("Digite uma opcao (0 a 30): ", {
      encoding: "utf-8",
    });

    return optionSelected;
  }

  private async options(option: number) {
    switch (option) {
      case 1:
        this.bostonCeltics();
        return;
      case 2:
        this.brooklynNets();
        return;
      case 3:
        this.newYorkKnicks();
        return;
      case 5:
        this.torontoRaptors();
        return;
      case 6:
        this.chicagoBulls();
        return;
      case 7:
        this.clevelandCavaliers();
        return;
      case 8:
        this.detroitPistons();
        return;
      case 9:
        this.indianaPacers();
        return;
      case 10:
        this.milwaukeeBucks();
        return;
      case 12:
        this.charlotteHornets();
        return;
      case 14:
        this.orlandoMagic();
        return;
      case 15:
        this.washingtonWizards();
        return;
      case 16:
        this.denverNuggets();
        return;
      case 17:
        this.minnesotaTimberwolves();
        return;
      case 18:
        this.oklahomaCityThuder();
        return;
      case 19:
        this.portlandTrailBlazers();
        return;
      case 20:
        this.utahJazz();
        return;
      case 21:
        this.goldenStateWarriors();
        return;
      case 22:
        this.losAngelesClippers();
        return;
      case 24:
        this.phoenixSuns();
        return;
      case 25:
        this.sacramentoKings();
        return;
      case 28:
        this.memphisGrizzlies();
        return;
      case 29:
        this.newOrleansPelicans();
        return;
      case 30:
        this.sanAntonioSpurs();
        return;
      case 0:
        break;
    }
  }

  private async bostonCeltics() {
    await this.page.goto("https://www.nba.com/celtics/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(".roster-wrap .player-wrap");

      return Array.from(divPlayers).map((player) => {
        const divPlayer = player.querySelector(
          ".player-wrap-inner"
        ) as HTMLDivElement;
        const number = divPlayer.querySelector(
          ".player-number-wrap .player-number"
        )?.textContent;
        const name = divPlayer.querySelector(".player-name")?.textContent;

        return { number, name };
      });
    });

    console.log(players);
    return;
  }

  private async brooklynNets() {
    await this.page.goto("https://www.nba.com/nets/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async newYorkKnicks() {
    await this.page.goto("https://www.nba.com/knicks/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async torontoRaptors() {
    await this.page.goto("https://www.nba.com/raptors/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async chicagoBulls() {
    await this.page.goto("https://www.nba.com/bulls/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async clevelandCavaliers() {
    await this.page.goto("https://www.nba.com/cavaliers/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async detroitPistons() {
    await this.page.goto("https://www.nba.com/pistons/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async indianaPacers() {
    await this.page.goto("https://www.nba.com/pacers/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async milwaukeeBucks() {
    await this.page.goto("https://www.nba.com/bucks/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async charlotteHornets() {
    await this.page.goto("https://www.nba.com/pacers/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async orlandoMagic() {
    await this.page.goto("https://www.nba.com/magic/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async washingtonWizards() {
    await this.page.goto("https://www.nba.com/wizards/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async denverNuggets() {
    await this.page.goto("https://www.nba.com/nuggets/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async minnesotaTimberwolves() {
    await this.page.goto("https://www.nba.com/timberwolves/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async oklahomaCityThuder() {
    await this.page.goto("https://www.nba.com/thunder/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async portlandTrailBlazers() {
    await this.page.goto("https://www.nba.com/blazers/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async utahJazz() {
    await this.page.goto("https://www.nba.com/jazz/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async goldenStateWarriors() {
    await this.page.goto("https://www.nba.com/warriors/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async losAngelesClippers() {
    await this.page.goto("https://www.nba.com/clippers/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async phoenixSuns() {
    await this.page.goto("https://www.nba.com/suns/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async sacramentoKings() {
    await this.page.goto("https://www.nba.com/kings/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async memphisGrizzlies() {
    await this.page.goto("https://www.nba.com/grizzlies/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async newOrleansPelicans() {
    await this.page.goto("https://www.nba.com/pelicans/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }

  private async sanAntonioSpurs() {
    await this.page.goto("https://www.nba.com/suns/roster");
    await this.page.waitForSelector("body");

    const players = await this.page.evaluate(() => {
      const divPlayers = document.querySelectorAll(
        ".Roster_rosterPlayers__FmXl3 .player-card"
      );

      return Array.from(divPlayers).map((player) => {
        const number = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoNum__C_dbB"
        )?.textContent;

        const position = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkInfoPosition__tmYvI"
        )?.textContent;

        const firstName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkFirstName__7oSMr"
        )?.textContent;

        const lastName = player.querySelector(
          ".Player_playerLinkInfo__dO0Sc .Player_playerLinkLastName__c4wBU"
        )?.textContent;

        return {
          numero: number,
          posição: position,
          nome: `${firstName} ${lastName}`,
        };
      });
    });

    console.log(players);
  }
}

(async () => {
  const bot = await Bot.create();
  await bot.execute();
})();
