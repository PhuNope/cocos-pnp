import { getChannelRCSdkScript } from "@/utils"
import { exportSingleFile } from "@/exporter/3x"
import { AD_SDK_SCRIPT } from "./inject-vars"
import { TChannel, TChannelPkgOptions } from "@/typings"

export const export3xLiftoff = async (options: TChannelPkgOptions) => {
  const channel: TChannel = 'Liftoff'
  await exportSingleFile({
    ...options,
    channel,
    transformHTML: async ($) => {
      const sdkInjectScript = getChannelRCSdkScript(channel) || AD_SDK_SCRIPT
      $(sdkInjectScript).appendTo('head')
    }
  })
}