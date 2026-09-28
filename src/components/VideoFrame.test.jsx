import { describe, it, expect, afterEach, vi } from 'vitest'
import { render } from '@testing-library/react'
import VideoFrame from './VideoFrame'

function mockMatchMedia(matches) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches,
    media: query,
  }))
}

describe('VideoFrame', () => {
  afterEach(() => {
    delete window.matchMedia
  })

  it('merender video saat pengguna tidak meminta reduced motion', () => {
    mockMatchMedia(false)
    const { container } = render(<VideoFrame mp4="a.mp4" poster="p.jpg" />)
    expect(container.querySelector('video')).toBeInTheDocument()
  })

  it('merender gambar poster tanpa video saat reduced motion aktif', () => {
    mockMatchMedia(true)
    const { container } = render(<VideoFrame mp4="a.mp4" poster="p.jpg" />)
    expect(container.querySelector('video')).not.toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('src', 'p.jpg')
  })

  it('tetap merender video jika matchMedia tidak tersedia', () => {
    const { container } = render(<VideoFrame mp4="a.mp4" poster="p.jpg" />)
    expect(container.querySelector('video')).toBeInTheDocument()
  })

   it('menambahkan kelas fill saat mode fill aktif', () => {
    const { container } = render(<VideoFrame poster="p.jpg" fill />)
    expect(container.firstChild).toHaveClass('video-frame--fill')
  }) 
})