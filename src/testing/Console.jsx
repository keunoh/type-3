import { useState } from "react"

// https://colordesigner.io/gradient-generator
// http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
export const Console = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  position.x = 5;

  console.log(position);
  console.log("Let me show %cMy stylish message", "color: orange; font-style: italic; background-color: blue;padding: 4px; border-radius: 4px; font-size:32px");

  console.log(' _   _  ____  __    __    _____');
  console.log('( )_( )( ___)(  )  (  )  (  _  )');
  console.log(' ) _ (  )__)  )(__  )(__  )(_)( ');
  console.log('(_) (_)(____)(____)(____)(_____)');

  console.log(`%c
    ██╗   ██╗███████╗██╗      ██████╗  ██████╗
    ██║   ██║██╔════╝██║     ██╔═══██╗██╔════╝
    ██║   ██║█████╗  ██║     ██║   ██║██║  ███╗
    ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██║   ██║
     ╚████╔╝ ███████╗███████╗╚██████╔╝╚██████╔╝
      ╚═══╝  ╚══════╝╚══════╝ ╚═════╝  ╚═════╝
    `, "color:green")

  console.log(`%c
    __                                    
    |  \                                   
    | $$       ______  __     __   ______  
    | $$      /      \|  \   /  \ /      \ 
    | $$     |  $$$$$$\\$$\ /  $$|  $$$$$$\
    | $$     | $$  | $$ \$$\  $$ | $$    $$
    | $$_____| $$__/ $$  \$$ $$  | $$$$$$$$
    | $$     \\$$    $$   \$$$    \$$     \
    \$$$$$$$$ \$$$$$$     \$      \$$$$$$$
    `, "color:red");

  console.group("second group");
  console.log("I'm in Second");
  console.log("I'm in Second two");
  console.groupEnd();

  console.log(`
    %c██╗   ██╗███████╗██╗      ██████╗  ██████╗
    %c██║   ██║██╔════╝██║     ██╔═══██╗██╔════╝
    %c██║   ██║█████╗  ██║     ██║   ██║██║  ███╗
    %c╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██║   ██║
    %c ╚████╔╝ ███████╗███████╗╚██████╔╝╚██████╔╝
    %c  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝  ╚═════╝
    `, "color:#22577A", "color:#38A3A5", "color:#57CC99", "color:#80ED99", "color:#99FFED", "color:#FFFFFF")


  console.info("이건 색깔");
  console.warn("HIHI");
  console.error("error!!")


  console.log(`
 ___       ________  ___      ___ _______      
|\  \     |\   __  \|\  \    /  /|\  ___ \     
\ \  \    \ \  \|\  \ \  \  /  / | \   __/|    
 \ \  \    \ \  \\\  \ \  \/  / / \ \  \_|/__  
  \ \  \____\ \  \\\  \ \    / /   \ \  \_|\ \ 
   \ \_______\ \_______\ \__/ /     \ \_______\
    \|_______|\|_______|\|__|/       \|_______|
`);

  console.log(`
 ____  _____ ____  ____  _____
/  __\/  __//  _ \/   _\/  __/
|  \/||  \  | / \||  /  |  \  
|  __/|  /_ | |-|||  \_ |  /_ 
\_/   \____\\_/ \|\____/\____\
`);


  console.log(`
 _  _    __    __   ____  ____ 
( )/ )  /__\\  (  ) (_  _)(_   )
 )  (  /(__)\\  )(__  )(   / /_ 
(_)\\_)(__)(__)(____)(__) (____)
`);

  console.log(`
%c██╗  ██╗ █████╗ ██╗  ████████╗███████╗
%c██║ ██╔╝██╔══██╗██║  ╚══██╔══╝╚══███╔╝
%c█████╔╝ ███████║██║     ██║     ███╔╝ 
%c██╔═██╗ ██╔══██║██║     ██║    ███╔╝  
%c██║  ██╗██║  ██║███████╗██║   ███████╗
%c╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝
`,
    'color:#acfa70',
    'color:#23d890',
    'color:#00ada4',
    'color:#00829d',
    'color:#005886',
    'color:#292f56',
  );

  return (
    <div>haha</div>
  )
}