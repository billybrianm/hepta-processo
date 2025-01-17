package com.hepta.funcionarios.rest;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.hepta.funcionarios.entity.Funcionario;
import com.hepta.funcionarios.entity.Setor;

class FuncionarioServiceTest {
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}
	
		
	@Test
	void testFuncionarioRead() {
		FuncionarioService service = new FuncionarioService();
		try {
			service.FuncionarioRead();
		} catch (Exception e) {
			fail (e.toString());
		}
	}

	@Test
	void testFuncionarioCreate() {
		FuncionarioService service = new FuncionarioService();
		Funcionario func = new Funcionario();
		Setor s = new Setor();
		s.setId(1000);
		s.setNome("test");
		
		func.setId(100);
		func.setNome("Test");
		func.setSalario((double)1000);
		func.setEmail("test@test.com");
		func.setSetor(s);
		
		try {		
			service.FuncionarioCreate(func);
		} catch (Exception e) {
			fail (e.toString());
		}
	}

	@Test
	void testFuncionarioUpdate() {
		FuncionarioService service = new FuncionarioService();
		Funcionario func = new Funcionario();
		Setor s = new Setor();
		s.setId(1000);
		s.setNome("test2");
		
		func.setId(100);
		func.setNome("Test2");
		func.setSalario((double)1000);
		func.setEmail("test2@test2.com");
		func.setSetor(s);
		
		try {		
			service.FuncionarioUpdate(100, func);
		} catch (Exception e) {
			fail(e.toString());
		}
		
	}

	@Test
	void testFuncionarioDelete() {
		FuncionarioService service = new FuncionarioService();
		Funcionario func = new Funcionario();
		Setor s = new Setor();
		s.setId(1000);
		s.setNome("test");
		
		func.setId(100);
		func.setNome("Test");
		func.setSalario((double)1000);
		func.setEmail("test@test.com");
		func.setSetor(s);
		
		try {
			service.FuncionarioDelete(100);
		} catch (Exception e) {
			fail (e.toString());
		}
		
	}

}
