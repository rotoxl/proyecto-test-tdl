select 
	n.idtema, n.permis, n.numtema, n.idpare, n.numsubtema, n.pagina, n.ordre, d.titol
from 
	ntemes n, 
	ntemes_desc d
where 
	n.idtema=d.idtema and d.ididioma=1
order by idtema

------------
select distinct t.permis from tests -- ADR, A, B, BTP

------------

select 
	(t.idtest +200) as cd_test, 
	('Test ' || t.idtest || '/Carné de conducir '|| t.permis) as ds_test, 
	'idtest=' || t.idtest || '/todotest' as comentario
from 
	tests t, tests_detall d
where 
		t.idtest=d.idtest 
	and t.permis in  ('A', 'B') 
	and d.numpregunta=1
order by t.idtest

------------
select 
	(td.idtest+200) as cd_test,
	p.idpregunta-1 as cd_pregunta, 
	d.pregunta,
	replace( replace( d.respA, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta0,
	replace( replace( d.respB, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta1,
	replace( replace( d.respC, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta2,

	case
		when p.imatge is null then null
	  	when p.imatge is '' then null
		else 'i' || p.imatge
	end as recursopregunta,

	case
		when p.imgExpl1 is null then null
	  	when p.imgExpl1 is '' then null
		else 'i' || p.imgExpl1
	end as recursorespuesta0,

	case
		when p.imgExpl2 is null then null
		when p.imgExpl2 is '' then null
		else 'i' || p.imgExpl2
	end as recursorespuesta1,

	case
		when p.imgExpl3 is null then null
		when p.imgExpl3 is '' then null
		else 'i' || p.imgExpl3
	end as recursorespuesta2,

	d.peuImgExpl1 as textorecursorespuesta0,
	d.peuImgExpl2 as textorecursorespuesta1,
	d.peuImgExpl3 as textorecursorespuesta2,

	p.respcorrecta as xxRespCorrecta,
	case WHEN p.respcorrecta is 'A' THEN 0
						WHEN p.respcorrecta is 'B' THEN 1
						WHEN p.respcorrecta is 'C' THEN 2
					--	WHEN p.respcorrecta is 'D' THEN 3
	ELSE -1
	END as cd_respuestacorrecta,

	replace(
		replace( d.explicacio, X'0D', '<CR>' ) ,
			    X'0A', '<CN>' 
		) || '<CR>(tema ' || p.idtema || ')'   as nota

from 
	tests_detall td,
	preguntes p, 
	preguntes_desc d
where
		td.idpregunta=p.idpregunta
	and p.idpregunta=d.idpregunta
	and d.ididioma=1

--------------------





select 'insert into preguntas_tests (cd_test, cd_pregunta, pregunta, cd_respuestacorrecta, respuesta0, respuesta1, respuesta2, recursopregunta, recursorespuesta0, recursorespuesta1, recursorespuesta2, textorecursorespuesta0, textorecursorespuesta1, textorecursorespuesta2) values (' ||
				ddd.cd_test
			|| ', ' ||
				ddd.cd_pregunta
			|| ', ' ||
				'"' || ddd.pregunta || '"'
			|| ', ' ||
				ddd.cd_respuestacorrecta


			|| ', ' ||
				'"' || ddd.respuesta0 || '"'
			|| ', ' ||
				'"' || ddd.respuesta1 || '"'
			|| ', ' ||
				'"' || ddd.respuesta2 || '"'

			
			|| ', ' ||
				'"' || ifnull(ddd.recursopregunta, '') || '"'
			|| ', ' ||
				'"' || ifnull(ddd.recursorespuesta0, '')  || '"'
			|| ', ' ||
				'"' || ifnull(ddd.recursorespuesta1, '') || '"'
			|| ', ' ||
				'"' || ifnull(ddd.recursorespuesta2, '') || '"'

			|| ', ' ||
				'"' || ifnull(ddd.textorecursorespuesta0, '') || '"'
			|| ', ' ||
				'"' || ifnull(ddd.textorecursorespuesta1, '') || '"'
			|| ', ' ||
				'"' || ifnull(ddd.textorecursorespuesta2, '') || '");' as xsql

-- , ddd.*


from 

(
select 
	(td.idtest+200) as cd_test,
	p.idpregunta-1 as cd_pregunta, 
	d.pregunta,
	replace( replace( d.respA, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta0,
	replace( replace( d.respB, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta1,
	replace( replace( d.respC, X'0D', '<CR>' ),X'0A', '<CN>' )  as respuesta2,

	case
		when p.imatge is null then null
	  	when p.imatge is '' then null
		else 'i' || p.imatge
	end as recursopregunta,

	case
		when p.imgExpl1 is null then null
	  	when p.imgExpl1 is '' then null
		else 'i' || p.imgExpl1
	end as recursorespuesta0,

	case
		when p.imgExpl2 is null then null
		when p.imgExpl2 is '' then null
		else 'i' || p.imgExpl2
	end as recursorespuesta1,

	case
		when p.imgExpl3 is null then null
		when p.imgExpl3 is '' then null
		else 'i' || p.imgExpl3
	end as recursorespuesta2,

	d.peuImgExpl1 as textorecursorespuesta0,
	d.peuImgExpl2 as textorecursorespuesta1,
	d.peuImgExpl3 as textorecursorespuesta2,

	p.respcorrecta as xxRespCorrecta,
	case WHEN p.respcorrecta is 'A' THEN 0
						WHEN p.respcorrecta is 'B' THEN 1
						WHEN p.respcorrecta is 'C' THEN 2
					--	WHEN p.respcorrecta is 'D' THEN 3
	ELSE -1
	END as cd_respuestacorrecta,

	replace(
		replace( d.explicacio, X'0D', '<CR>' ) ,
			    X'0A', '<CN>' 
		) || '<CR>(tema ' || p.idtema || ')'   as nota

from 
	tests_detall td,
	preguntes p, 
	preguntes_desc d
where
		td.idpregunta=p.idpregunta
	and p.idpregunta=d.idpregunta
	and d.ididioma=1
	) ddd