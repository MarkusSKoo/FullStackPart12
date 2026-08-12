import { test, expect, describe, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Todo from "./Todo";

describe('Todo renders a todo', () => {
  afterEach(() => {
    cleanup()
  })

  test('with done=false correctly', () => {
    const deleteTodo = () => {}
    const completeTodo = () => {}
    const todo = { text: "Test todo", done: false }

    render(
        <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        />
    )

    expect(screen.getByText("Test todo")).toBeDefined()
    expect(screen.getByText("This todo is not done")).toBeDefined()
  })

  test('with done=true correctly', () => {
    const deleteTodo = () => {}
    const completeTodo = () => {}
    const todo = { text: "Test todo", done: true }

    render(
        <Todo
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        />
    )

    expect(screen.getByText("Test todo")).toBeDefined()
    expect(screen.getByText("This todo is done")).toBeDefined()
  })
})

