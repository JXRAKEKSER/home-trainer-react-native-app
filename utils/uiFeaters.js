export const getGreeting = () => {
    const date = new Date();
    
    if(date.getHours() < 5){
        return 'Доброй ночи'
    }else if(date.getHours() >= 5 && date.getHours() < 12 ){
        return 'Доброе утро'
    }else if(date.getHours() >= 12 && date.getHours() < 18){
        return 'Добрый день'
    }else if(date.getHours() >= 18){
        return 'Добрый вечер'
    }
}