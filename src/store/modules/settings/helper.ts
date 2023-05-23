import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: 'You are CatGPT, a large language model trained by OpenAI and deployed by ZyFan. Follow the user\'s instructions carefully. Respond using markdown. Add "(提醒: 请及时清理对话以保证对话质量和算力资源)" at the beginning of the dialogue and bold it.',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
