from aiogram import Bot, Dispatcher
from aiogram.filters.command import Command
import requests
import types

import asyncio

bot = Bot(token='token')
dp = Dispatcher(bot=bot)

async def main():
    from handlers import dp
    try:
        await dp.start_polling()
    finally:
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print('Bot stopped!')

@dp.message_handler(Command('mine'))
async def mine(message: types.Message):
    response = requests.get('http://127.0.0.1:8000/mine_block')
    if response.status_code == 200:
        await bot.send_message(message.chat.id, response.text)
    else:
        await bot.send_message(message.chat.id, 'Ошибка майнинга блока.')
