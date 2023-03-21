from whoop_download_proto import whoop_login 
# import configparser

client = whoop_login()
client.get_authorization('whoop_login.ini')

# config=configparser.ConfigParser()
# config.read(user_ini)
# username=config['whoop']['username']
# password=config['whoop']['password']



# keydata = client.get_keydata_all()
# keydata.sample(5)

client.get_sleep_all()

# can you figure out why the current process won't retreive any data from the WHOOP API?