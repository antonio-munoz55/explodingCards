export class Card{
    type;
    value;
    icon;
    description;
    color;

    constructor(type, value = null, icon, description, color) {
        this.type = type;
        this.value = value;
    
        switch (this.type) {
          case 'Bomb':
            this.icon = "src/img/bomb.png";
            this.description = "If you draw one and don't have a Defuse card, you lose.";
            this.color = "Black";
            break;
          case 'Defuse':
            this.icon = "src/img/defuse.png";
            this.description = "You can keep all the ones you draw in your hand.";
            this.color = "Green";
            break;
          case 'Skip turn':
            this.icon = "src/img/skip.png";
            this.description = "They allow you to avoid drawing a card.";
            this.color = "Blue";
            break;
          case 'Nope':
            this.icon = "src/img/nope.png";
            this.description = "If an opponent wants to skip a turn, you can cancel it using this card, both are discarded.";
            this.color = "Red";
            break;
          case 'Points':
            this.icon = "src/img/point.png";
            this.description = "When generated, they can have a random value between 1 and 10. If the game ends and more than one player is alive, the one with the most points wins.";
            this.color = "White";
        }
      }
}