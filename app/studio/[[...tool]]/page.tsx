'use client'

import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config'
import { Sparkles, Key, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
  const isConfigured =
    Boolean(projectId) &&
    !projectId.includes('your_project_id') &&
    /^[a-z0-9-]+$/i.test(projectId)

  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-[#0D0E12] text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-xl w-full bg-[#16181E] border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#FFB800]/10 rounded-2xl text-[#FFB800] border border-[#FFB800]/20">
              <Key className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Sanity CMS Setup Required</h1>
              <p className="text-sm text-gray-400">Connect your Sanity Project ID to access the Studio</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-300 leading-relaxed bg-[#0D0E12] p-5 rounded-2xl border border-gray-800/80">
            <p className="font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFB800]" /> Follow these quick steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 font-mono text-xs">
              <li className="space-y-1">
                <span>Go to Sanity Management Dashboard & create a free project:</span>
                <a
                  href="https://www.sanity.io/manage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#FFB800] hover:underline flex items-center gap-1 text-xs mt-1"
                >
                  https://www.sanity.io/manage <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>Copy your <strong>Project ID</strong> (e.g. <code>abc123xy</code>).</li>
              <li>
                Open your <code className="text-[#FFB800]">.env.local</code> file in your project folder.
              </li>
              <li>
                Replace <code className="text-[#FFB800]">NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here</code> with your real Project ID.
              </li>
              <li>Restart your dev server (<code>npm run dev</code>) and refresh this page!</li>
            </ol>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-800">
            <span className="flex items-center gap-1.5 text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Schemas & Studio components ready
            </span>
            <span>Serente CMS</span>
          </div>
        </div>
      </div>
    )
  }

  return <NextStudio config={config} />
}
