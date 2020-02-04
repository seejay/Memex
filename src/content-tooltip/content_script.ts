import { bodyLoader } from '../util/loader'
import {
    setupRPC,
    insertTooltip,
    userSelectedText,
    removeTooltip,
} from './interactions'
import ToolbarNotifications from '../toolbar-notification/content_script'
import {
    conditionallyShowOnboardingNotifications,
    conditionallyRemoveOnboardingSelectOption,
} from './onboarding-interactions'
import {
    getTooltipState,
    getKeyboardShortcutsState,
    convertKeyboardEventToKeyString,
    runOnScriptShutdown,
} from './utils'

export default async function init({
    toolbarNotifications,
    store,
}: {
    toolbarNotifications?: ToolbarNotifications
    store: any
}) {
    runOnScriptShutdown(() => removeTooltip())
    // Set up the RPC calls even if the tooltip is enabled or not.
    setupRPC({ toolbarNotifications, store })
    await conditionallyShowOnboardingNotifications({
        toolbarNotifications,
    })

    await bodyLoader()
    await insertTooltip({ toolbarNotifications, store })
}
